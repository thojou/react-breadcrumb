import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BreadcrumbStoreContext } from '../BreadcrumbStore';

describe('BreadcrumbStoreContext', () => {
  const TestConsumer = () => {
    const context = useContext(BreadcrumbStoreContext);

    return <p>{JSON.stringify(context)}</p>;
  };

  it('should be a valid default context', () => {
    render(<TestConsumer />);
    expect(screen.getByText(/"state":/)).toHaveTextContent('"state":[]');
  });
});
