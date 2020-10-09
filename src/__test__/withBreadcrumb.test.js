import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import withBreadcrumb from '../withBreadcrumb';
import BreadcrumbStore from '../BreadcrumbStore';

describe('withBreadcrumb', () => {
  it('should wrap component', () => {
    const TestComponent = () => '';
    const EnhancedComponent = withBreadcrumb('test')(TestComponent);

    expect(EnhancedComponent.WrappedComponent).toBe(TestComponent);
    expect(EnhancedComponent.displayName).toBe('withBreadcrumb(TestComponent)');
    expect(
      render(
        <EnhancedComponent
          addBreadcrumb={jest.fn()}
          removeBreadcrumb={jest.fn()}
        />
      )
    ).toBeTruthy();
    expect(
      render(
        <BreadcrumbStore>
          <EnhancedComponent />
        </BreadcrumbStore>
      )
    ).toBeTruthy();
  });
});
