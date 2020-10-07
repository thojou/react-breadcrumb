import breadcrumbReducer from './slice';

export default () => ({
  id: 'breadcrumb',
  reducerMap: {
    breadcrumb: breadcrumbReducer
  }
});
