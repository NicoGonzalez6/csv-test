import customErr from '../../src/errors';

describe('error test cases', () => {
  it('Bad request test', () => {
    const err = () => {
      throw new customErr.badRequest('Bad Request Error');
    };
    expect(() => err()).toThrow(customErr.badRequest);
  });

  it('Not Found test', () => {
    const err = () => {
      throw new customErr.notFound('Not Found Error');
    };
    expect(() => err()).toThrow(customErr.notFound);
  });
});
