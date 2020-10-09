import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb, { BreadcrumbContext } from '../Breadcrumb';
import BreadcrumbStore from '../BreadcrumbStore';

const TestConsumer = () => {
  const { level } = useContext(BreadcrumbContext);

  return (
    <p>
      Current Level:
      {level}
    </p>
  );
};

describe('BreadcrumbContext', () => {
  it('should render default context', () => {
    render(<TestConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent(
      'Current Level:0'
    );
  });
});

describe('Breadcrumb', () => {
  it('should render with Store', () => {
    const NestedConsumer = () => (
      <BreadcrumbStore>
        <Breadcrumb label="level1">
          <Breadcrumb label="level2">
            <TestConsumer />
          </Breadcrumb>
        </Breadcrumb>
      </BreadcrumbStore>
    );
    render(<NestedConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent(
      'Current Level:2'
    );
  });

  it('should render as custom actions', () => {
    const TestBreadcrumb = ({ ...props }) => (
      <Breadcrumb {...props} add={() => ''} remove={() => ''} />
    );
    const NestedConsumer = () => (
      <TestBreadcrumb label="level1">
        <TestBreadcrumb label="level2">
          <TestConsumer />
        </TestBreadcrumb>
      </TestBreadcrumb>
    );
    render(<NestedConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent(
      'Current Level:2'
    );
  });
});
