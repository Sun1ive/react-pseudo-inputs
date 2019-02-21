import React, { Component } from 'react';
import classnames from 'classnames';
import { KeyboardService } from '../service/Keyboard.service';

import './InputContainer.css';

interface InputContainerProps {
  value: string;
  name: string;
  onChangeCallback: (key: string, name: string) => void;
  onDeleteCallback: (name: string) => void;
  validation: RegExp;
  validateKeys: RegExp;
}

export class InputContainer extends Component<InputContainerProps> {
  state = {
    isActive: false,
    isValid: false
  };

  private _onClick = () => {
    this.onClick();
  };

  public subscribeToKeyboard = () => {
    document.addEventListener('keydown', this._onChangeHandler);

    this.setState({
      isActive: true
    });
  };

  public unsubscribeFromKeyboard = () => {
    document.removeEventListener('keydown', this._onChangeHandler);

    this.setState({
      isActive: false
    });
  };

  public onClick() {
    KeyboardService.instance.setActiveInput(this);
  }

  private readonly _DHCPVALIDATOR = () => {
    this.setState({
      isValid: this.props.validation.test(this.props.value)
    });
  };

  private readonly _onChangeHandler = (e: KeyboardEvent) => {
    const { key } = e;

    switch (key) {
      case 'Backspace':
        this.props.onDeleteCallback(this.props.name);
        this._DHCPVALIDATOR();
        break;

      default:
        if (this.props.validateKeys.test(key)) {
          this.props.onChangeCallback(key, this.props.name);
          this._DHCPVALIDATOR();
        }

        break;
    }
  };

  render() {
    const classes = classnames({
      'pseudo-input': true,
      'is-active': this.state.isActive,
      'is-not-valid': !this.state.isValid
    });

    return (
      <div onClick={this._onClick} className={classes}>
        {this.props.value}
      </div>
    );
  }
}
