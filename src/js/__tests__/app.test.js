import Validator from '../app';

test('usernameCheck', () => {
  const username = 'Abc-123_123_abc';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(true);
});

test('usernameCheck_2', () => {
  const username = 'A';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(true);
});

test('fourNumbers', () => {
  const username = 'Abc_1234-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('startWithSymbol', () => {
  const username = '-abc_12-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('finishWithNumber', () => {
  const username = 'Abc_1-a2';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('illegalSymbol', () => {
  const username = 'Abc_1-&ab';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});
