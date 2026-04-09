export default class Validator {
  validateUsername(username) {
    if (typeof username !== 'string') {
      return false;
    }

    // Допустимые символы: латиница, цифры, _, -
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return false;
    }

    // Не начинается с цифры, _ или -
    if (!/^[a-zA-Z]/.test(username)) {
      return false;
    }

    // Не заканчивается цифрой, _ или -
    if (!/[a-zA-Z]$/.test(username)) {
      return false;
    }

    // Не более 3 цифр подряд
    if (/\d{4,}/.test(username)) {
      return false;
    }

    return true;
  }
}
