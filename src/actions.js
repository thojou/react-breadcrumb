export const ADD_BREADCRUMB = '@thojou/react-breadcrumb/add';
export const REMOVE_BREADCRUMB = '@thojou/react-breadcrumb/remove';

export const addBreadcrumb = (label, path, level) => ({
  type: ADD_BREADCRUMB,
  payload: {
    label,
    path,
    level
  }
});

export const removeBreadcrumb = label => ({
  type: REMOVE_BREADCRUMB,
  payload: {
    label
  }
});
