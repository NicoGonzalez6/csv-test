import { cleanRouteFile } from '../../src/utils/helpers';

describe('utils test cases', () => {
  it('should clean the extension file name', () => {
    const example = 'route.ts';

    const cleanExample = cleanRouteFile(example);

    expect(cleanExample).toBe('route');
  });
});
