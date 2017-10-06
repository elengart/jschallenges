export class Hello {

  constructor(info = {firstName: 'Stranger'}) {
     this.firstName = info.firstName;
  }

  /**
  */
  greeting() {
      return `Hello ${this.firstName}!`;
  }
}
