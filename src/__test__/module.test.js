import getBreadcrumbModule from '../module';

describe('module', () => {
  it('should be a valid redux-dynamic-modules function', () => {
    const module = getBreadcrumbModule();
    expect(module).toHaveProperty('reducerMap');
    expect(module).toMatchObject({ id: 'breadcrumb' });
  });
});
