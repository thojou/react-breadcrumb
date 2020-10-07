import React, { useContext } from 'react'
import * as redux from "react-redux";
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import '@testing-library/jest-dom/extend-expect'
import { Context, Provider } from './context/Context'
import useBreadcrumb from './hook/useBreadcrumb'
import { addBreadcrumb, removeBreadcrumb } from './module/slice'

describe('BreadcrumbContext', () => {
  const TestConsumer = () => {
    const context = useContext(Context);
  
    return (
      <p>Current Level: {context.level}</p>
    )
  }

  it('should render default context', () => {
    render(<TestConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent('Current Level: 0');
  });

  it('should increase level on nested rendering', () => {
    const NestedConsumer = () => (
        <Provider>
          <Provider>
            <TestConsumer />
          </Provider>
        </Provider>
      );
    render(<NestedConsumer />);
    expect(screen.getByText(/^Current Level:/)).toHaveTextContent('Current Level: 2');
  });
});

describe('useBreadcrumb', () => {
  const component = () => useBreadcrumb('Test');

  it('should add breadcrumb on first render', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    //action
    renderHook(component);

    //assert
    expect(mockDispatchFn).toHaveBeenLastCalledWith(addBreadcrumb({label: 'Test', path: '/', level: 0}));
    expect(mockDispatchFn).not.toHaveBeenCalledWith(removeBreadcrumb('Test'));

    //teardown
    useDispatchSpy.mockClear();
  });



  it('should add breadcrumb on first render', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    //action
    const result = renderHook(component);
    result.unmount();

    //assert
    expect(mockDispatchFn).toHaveBeenCalledWith(addBreadcrumb({label: 'Test', path: '/', level: 0}));
    expect(mockDispatchFn).toHaveBeenLastCalledWith(removeBreadcrumb('Test'));

    //teardown
    useDispatchSpy.mockClear();
  });

  it('should not dispatch any action if label is nil', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    //action
    const result = renderHook(() => useBreadcrumb());
    result.unmount();

    //assert
    expect(mockDispatchFn).toHaveBeenCalledTimes(0);

    //teardown
    useDispatchSpy.mockClear();
  });

})
