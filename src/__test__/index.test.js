import {
  addBreadcrumb,
  removeBreadcrumb,
  reducer,
  getBreadcrumbModule,
  BreadcrumbStore,
  Breadcrumb
} from '../index';

describe('index.js', () => {
  it('should export truthy', () => {
    expect(addBreadcrumb).toBeTruthy();
    expect(removeBreadcrumb).toBeTruthy();
    expect(reducer).toBeTruthy();
    expect(getBreadcrumbModule).toBeTruthy();
    expect(BreadcrumbStore).toBeTruthy();
    expect(Breadcrumb).toBeTruthy();
  });
});
