import reducer from './reducer';

export default () => ({
  id: 'breadcrumb',
  reducerMap: {
    breadcrumb: reducer
  }
});
