import * as Service from '../src/common';

describe('@common: service checks', () => {

  it('* getFileNameFromPath', () => {
    const result = Service.getFileNameFromPath('./path-to/some-icon.png');

    expect(result).toEqual('some-icon');
  });

});
