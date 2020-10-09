const {
  addBreadcrumb,
  ADD_BREADCRUMB,
  removeBreadcrumb,
  REMOVE_BREADCRUMB
} = require('../actions');

describe('addBreadcrumb', () => {
  it('should create valid action', () => {
    const label = 'Test';
    const path = '/';
    const level = 0;

    expect(addBreadcrumb(label, path, level)).toMatchObject({
      type: ADD_BREADCRUMB,
      payload: {
        label,
        path,
        level
      }
    });
  });
});

describe('removeBreadcrumb', () => {
  it('should create valid action', () => {
    const label = 'Test';

    expect(removeBreadcrumb(label)).toMatchObject({
      type: REMOVE_BREADCRUMB,
      payload: {
        label
      }
    });
  });
});
