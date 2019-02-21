import { InputContainer } from '../components/InputContainer';

interface INumericSymbols {
  key: string;
  value: string;
}

export class KeyboardService {
  private static _instance: KeyboardService;
  private _currentInput: InputContainer | null = null;

  static get instance(): KeyboardService {
    if (!KeyboardService._instance) {
      this._instance = new KeyboardService();
    }

    return this._instance;
  }

  static get currentInput() {
    return this.instance._currentInput;
  }

  public setActiveInput = (component: InputContainer | null) => {
    if (this._currentInput === component) {
      return;
    }

    if (this._currentInput) {
      this._currentInput.unsubscribeFromKeyboard();
    }

    this._currentInput = component;
    if (component) {
      component.subscribeToKeyboard();
    }
  };

  public getNumericSymbols(): INumericSymbols[][] {
    return [
      [
        {
          key: '7',
          value: '7'
        },
        {
          key: '8',
          value: '8'
        },
        {
          key: '9',
          value: '9'
        }
      ],
      [
        {
          key: '4',
          value: '4'
        },
        {
          key: '5',
          value: '5'
        },
        {
          key: '6',
          value: '6'
        }
      ],
      [
        {
          key: '1',
          value: '1'
        },
        {
          key: '2',
          value: '2'
        },
        {
          key: '3',
          value: '3'
        }
      ],
      [
        {
          key: '0',
          value: '0'
        },
        {
          key: '',
          value: 'Backspace'
        }
      ]
    ];
  }

  public getKeyboardSymbols() {
    return [
      [
        {
          key: 'q',
          value: 'q'
        },
        {
          key: 'w',
          value: 'w'
        },
        {
          key: 'e',
          value: 'e'
        },
        {
          key: 'r',
          value: 'r'
        },
        {
          key: 't',
          value: 't'
        },
        {
          key: 'y',
          value: 'y'
        },
        {
          key: 'u',
          value: 'u'
        },
        {
          key: 'i',
          value: 'i'
        },
        {
          key: 'o',
          value: 'o'
        },
        {
          key: 'p',
          value: 'p'
        }
      ],
      [
        {
          key: 'a',
          value: 'a'
        },
        {
          key: 's',
          value: 's'
        },
        {
          key: 'd',
          value: 'd'
        },
        {
          key: 'f',
          value: 'f'
        },
        {
          key: 'g',
          value: 'g'
        },
        {
          key: 'h',
          value: 'h'
        },
        {
          key: 'j',
          value: 'j'
        },
        {
          key: 'k',
          value: 'k'
        },
        {
          key: 'l',
          value: 'l'
        }
      ],
      [
        {
          key: 'z',
          value: 'z'
        },
        {
          key: 'x',
          value: 'x'
        },
        {
          key: 'c',
          value: 'c'
        },
        {
          key: 'v',
          value: 'v'
        },
        {
          key: 'b',
          value: 'b'
        },
        {
          key: 'n',
          value: 'n'
        },
        {
          key: 'm',
          value: 'm'
        }
      ],
      [
        {
          key: '@',
          value: '@'
        },
        {
          key: 'Space',
          value: 'Space'
        },
        {
          key: '_',
          value: '_'
        },
        {
          key: '-',
          value: '-'
        },
        {
          key: '.',
          value: '.'
        }
      ]
    ];
  }
}
