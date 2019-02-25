import React, { Component } from 'react';
import classnames from 'classnames';
import { KeyboardService } from '../service/Keyboard.service';

import './InputContainer.css';

interface InputContainerProps {
  value: string;
  name: string;
  onChangeCallback: (key: string, name: string) => void;
  onDeleteCallback: (name: string) => void;
  validateKeys: RegExp;
  isValid: boolean;
}

export class InputContainer extends Component<InputContainerProps> {
  public static defaultProps = {
    isValid: true
  };

  state = {
    isActive: false
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

  private readonly _onChangeHandler = (e: KeyboardEvent) => {
    const { key } = e;

    switch (key) {
      case 'Backspace':
        this.props.onDeleteCallback(this.props.name);
        break;

      default:
        if (this.props.validateKeys.test(key)) {
          this.props.onChangeCallback(key, this.props.name);
        }

        break;
    }
  };

  render() {
    const classes = classnames({
      'pseudo-input': true,
      'is-active': this.state.isActive,
      'is-not-valid': !this.props.isValid
    });

    return (
      <div onClick={this._onClick} className={classes}>
        {this.props.value}
      </div>
    );
  }
}
