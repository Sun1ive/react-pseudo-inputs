import React, { Component } from 'react';
import { InputContainer } from './InputContainer';

interface ISettingsState {
  name: string;
  password: string;
  ip: string;
  [key: string]: any;
}

interface IValidatePatterns {
  [key: string]: any;
}

export class Settings extends Component<{}, ISettingsState> {
  private _validatePatterns: IValidatePatterns = {
    ip: /^((255)[.]){3}(255)$/,
    password: /^\+?\d+$/
  };

  state: ISettingsState = {
    name: 'foo',
    password: '12345',
    ip: '10.10.10.10'
  };

  public validator = (name: string) => {
    const isMatches = this._validatePatterns[name].test(this.state[name]);

    this.setState(
      prevState => ({
        ...prevState,
        validation: {
          ...prevState.validation,
          [name]: isMatches
        }
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  public onChangeHandler = (key: string, name: string) => {
    this.setState(
      prevState => ({
        [name]: `${prevState[name]}${key}`
      }),
      () => {
        this.validator(name);
      }
    );
  };

  public onDeleteHandler = (name: string) => {
    this.setState(
      prevState => ({
        [name]: prevState[name].slice(0, prevState[name].length - 1)
      }),
      () => {
        this.validator(name);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Settings page</h1>
        <button onClick={() => console.log(this.state)}>SAVE SETTINGS</button>
        <div style={{ margin: 24 }}>
          <InputContainer
            onChangeCallback={this.onChangeHandler}
            onDeleteCallback={this.onDeleteHandler}
            validateKeys={new RegExp(/^[0-9a-zA-Z]$/)}
            name="name"
            value={this.state.name}
          />
        </div>
        <div style={{ margin: 24 }}>
          <InputContainer
            name="ip"
            validateKeys={new RegExp(/^([0-9])|\.$/)}
            onChangeCallback={this.onChangeHandler}
            onDeleteCallback={this.onDeleteHandler}
            value={this.state.ip}
          />
        </div>{' '}
        <div style={{ margin: 24 }}>
          <InputContainer
            name="password"
            validateKeys={new RegExp(/^[0-9a-zA-Z]$/)}
            onChangeCallback={this.onChangeHandler}
            onDeleteCallback={this.onDeleteHandler}
            value={this.state.password}
          />
        </div>
      </div>
    );
  }
}
