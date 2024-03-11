import Validator from '../Validator';

test('Check name', () => {
    const validator = new Validator();
    const userName = "my_username_123";
    expect(validator.validateUsername(userName)).toEqual(true);
});
test('Check name 2', () => {
    const validator = new Validator();
    const userName = "my_username_1235";
    expect(validator.validateUsername(userName)).toEqual(false);
});
test('Check name 3', () => {
    const validator = new Validator();
    const userName = "username%%$#!" ;
    expect(validator.validateUsername(userName)).toEqual(false);
});