import React, { Component } from 'react';
import { InputContainer } from './InputContainer';

export class Settings extends Component<
  {},
  { name: string; password: string; [key: string]: any; ip: string }
> {
  state = {
    name: 'foo',
    password: '12345',
    ip: '10.10.10.10'
  };

  public onChangeHandler = (key: string, name: string) => {
    this.setState(prevState => ({
      [name]: `${prevState[name]}${key}`
    }));
  };

  public onDeleteHandler = (name: string) => {
    this.setState(prevState => ({
      [name]: prevState[name].slice(0, prevState[name].length - 1)
    }));
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
            validation={new RegExp(/^([0-9a-zA-Z])$/)}
            validateKeys={new RegExp(/^[0-9a-zA-Z]$/)}
            name="name"
            value={this.state.name}
          />
        </div>
        <div style={{ margin: 24 }}>
          <InputContainer
            name="ip"
            validation={
              new RegExp(
                /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/
              )
            }
            validateKeys={new RegExp(/^([0-9])|\.$/)}
            onChangeCallback={this.onChangeHandler}
            onDeleteCallback={this.onDeleteHandler}
            value={this.state.ip}
          />
        </div>{' '}
        <div style={{ margin: 24 }}>
          <InputContainer
            name="password"
            validation={new RegExp(/^([0-9])$/)}
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
