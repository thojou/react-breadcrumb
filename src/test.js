import ExampleComponent from './'
import React, { useContext } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Context } from './context/Context'

describe('BreadcrumbContext', () => {
  it('should render default context', () => {
    const TestConsumer = () => {
      const context = useContext(Context);
    
      return (
        <p>Current Level: {context.level}</p>
      )
    }

    render(<TestConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent('Current Level: 0');
  });
});
