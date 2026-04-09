import Validator from './Validator';

const validator = new Validator();

const usernames = [
  'john_doe',
  '123user',
  'valid-user123',
  'user_123',
  'user1234',
  '-user',
  'user_',
];

console.log('=== Username Validation ===\n');
usernames.forEach((username) => {
  const isValid = validator.validateUsername(username);
  console.log(`${username}: ${isValid ? '✓ valid' : '✗ invalid'}`);
});
