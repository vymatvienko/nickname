export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return /^[a-z]+(\d{0,3}([a-z_-]+\d{0,3})*[a-z]+)*$/i.test(this.username);
  }
}
