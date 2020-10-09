import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
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

  it('should throw error on missing add function', () => {
    const { result } = renderHook(() => {
      const { add } = useContext(BreadcrumbStoreContext);
      add();
    });

    expect(result.error.message).toBe(
      'You must either wrap your application with <BreadcrumbStore /> component or inject your own "add" function via component property.'
    );
  });

  it('should throw error on missing remove function', () => {
    const { result } = renderHook(() => {
      const { remove } = useContext(BreadcrumbStoreContext);
      remove();
    });

    expect(result.error.message).toBe(
      'You must either wrap your application with <BreadcrumbStore /> component or inject your own "remove" function via component property.'
    );
  });
});
