import { addBreadcrumb, removeBreadcrumb } from '../actions';
import reducer from '../reducer';

describe('reducer', () => {
  it('should add breadcrumb', () => {
    const level0 = addBreadcrumb('Level0', '/level0', 0);
    const level1 = addBreadcrumb('Level1', '/level1', 1);

    let state = reducer([], level0);
    state = reducer(state, level1);

    expect(state).toMatchObject([level0.payload, level1.payload]);
  });

  it('should not add duplicated breadcrumb', () => {
    const action1 = addBreadcrumb('Level0', '/level0', 0);
    const action2 = addBreadcrumb('Level0', '/level0', 0);

    let state = reducer([], action1);
    state = reducer(state, action2);

    expect(state).toMatchObject([action1.payload]);
  });

  it('should remove breadcrumb', () => {
    const add = addBreadcrumb('Level0', '/level0', 0);
    const remove = removeBreadcrumb('Level0');

    let state = reducer(undefined, add);
    state = reducer(state, remove);

    expect(state).toHaveLength(0);
  });

  it('should ignore non existing remove', () => {
    const remove = removeBreadcrumb('Level0');
    const state = [];

    const result = reducer(state, remove);

    expect(result).toBe(state);
  });

  it('should ignnore unkown actions', () => {
    const state = [];
    const result = reducer(state, { type: 'unkown' });

    expect(result).toBe(state);
  });
});
