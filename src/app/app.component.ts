import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Dummy Password Generator!";
  password: string = "";
  length: number = 8;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  onButtonClick() {
    this.generatePassword();
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onchangeLength(value: string) {
    if (+value < 8) {
      value = "8";
    }
    this.length = +value;
  }

  generatePassword(): string {
    const letters: string = "abcdefghijklmnopqrstuvwxyz";
    const numbers: string = "1234567890";
    const symbols: string = "!@#$%^&*()_+~";
    let validChars: string = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let passGen: string = "";
    for (let i = 0; i < this.length; i++) {
      const index: number = Math.floor(Math.random() * validChars.length);
      passGen += validChars[index];
    }
    return (this.password = passGen);
  }
}
