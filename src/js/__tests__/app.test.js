import Validator from '../app';

test('usernameCheck', () => {
  const username = 'Abc_345abc67-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(true);
});

test('usernameCheck_2', () => {
  const username = 'Abc_3456-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});
