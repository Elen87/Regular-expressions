import Validator from '../Validator';

describe('Validator class', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateUsername method', () => {
    describe('Valid usernames', () => {
      test('should accept simple latin name', () => {
        expect(validator.validateUsername('john')).toBe(true);
      });

      test('should accept name with underscore', () => {
        expect(validator.validateUsername('john_doe')).toBe(true);
      });

      test('should accept name with hyphen', () => {
        expect(validator.validateUsername('john-doe')).toBe(true);
      });

      test('should accept name with numbers in the middle', () => {
        // Цифры только в середине, не в начале и не в конце
        expect(validator.validateUsername('us123er')).toBe(true);
        expect(validator.validateUsername('a1b2c3d')).toBe(true);
      });

      test('should accept name with underscore and numbers in middle', () => {
        expect(validator.validateUsername('user_123_abc')).toBe(true);
      });

      test('should accept name with hyphen and numbers in middle', () => {
        expect(validator.validateUsername('user-123-abc')).toBe(true);
      });

      test('should accept single character', () => {
        expect(validator.validateUsername('a')).toBe(true);
        expect(validator.validateUsername('Z')).toBe(true);
      });

      test('should accept name with mixed case', () => {
        expect(validator.validateUsername('JohnDoe')).toBe(true);
        expect(validator.validateUsername('johnDoe123abc')).toBe(true);
      });

      test('should accept name with numbers not exceeding 3 in row', () => {
        expect(validator.validateUsername('user123abc')).toBe(true);
        expect(validator.validateUsername('us123er')).toBe(true);
        expect(validator.validateUsername('a123b')).toBe(true);
      });

      test('should accept complex valid name', () => {
        expect(validator.validateUsername('valid_user-123_name')).toBe(true);
      });
    });

    describe('Invalid usernames', () => {
      test('should reject username starting with number', () => {
        expect(validator.validateUsername('123user')).toBe(false);
        expect(validator.validateUsername('1user')).toBe(false);
      });

      test('should reject username ending with number', () => {
        expect(validator.validateUsername('user123')).toBe(false);
        expect(validator.validateUsername('user1')).toBe(false);
      });

      test('should reject username starting with underscore', () => {
        expect(validator.validateUsername('_user')).toBe(false);
        expect(validator.validateUsername('_user_')).toBe(false);
      });

      test('should reject username ending with underscore', () => {
        expect(validator.validateUsername('user_')).toBe(false);
      });

      test('should reject username starting with hyphen', () => {
        expect(validator.validateUsername('-user')).toBe(false);
      });

      test('should reject username ending with hyphen', () => {
        expect(validator.validateUsername('user-')).toBe(false);
      });

      test('should reject username with 4 or more digits in row', () => {
        expect(validator.validateUsername('user1234')).toBe(false);
        expect(validator.validateUsername('12345user')).toBe(false);
        expect(validator.validateUsername('user12345')).toBe(false);
        expect(validator.validateUsername('us1234er')).toBe(false);
      });

      test('should reject username with 5 digits in row', () => {
        expect(validator.validateUsername('user12345abc')).toBe(false);
      });

      test('should reject username with forbidden characters', () => {
        expect(validator.validateUsername('user@name')).toBe(false);
        expect(validator.validateUsername('user#name')).toBe(false);
        expect(validator.validateUsername('user name')).toBe(false);
        expect(validator.validateUsername('user$name')).toBe(false);
      });

      test('should reject username with cyrillic characters', () => {
        expect(validator.validateUsername('пользователь')).toBe(false);
        expect(validator.validateUsername('user_пользователь')).toBe(false);
      });

      test('should reject empty string', () => {
        expect(validator.validateUsername('')).toBe(false);
      });

      test('should reject non-string input', () => {
        expect(validator.validateUsername(null)).toBe(false);
        expect(validator.validateUsername(undefined)).toBe(false);
        expect(validator.validateUsername(123)).toBe(false);
        expect(validator.validateUsername({})).toBe(false);
        expect(validator.validateUsername([])).toBe(false);
      });

      test('should reject username with only numbers', () => {
        expect(validator.validateUsername('123')).toBe(false);
        expect(validator.validateUsername('12345')).toBe(false);
      });

      test('should reject username with only underscore', () => {
        expect(validator.validateUsername('_')).toBe(false);
      });

      test('should reject username with only hyphen', () => {
        expect(validator.validateUsername('-')).toBe(false);
      });

      test('should reject username with underscore and numbers only', () => {
        expect(validator.validateUsername('_123')).toBe(false);
        expect(validator.validateUsername('123_')).toBe(false);
      });
    });
  });
});
