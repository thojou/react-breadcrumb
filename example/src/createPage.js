import { compose } from 'ramda';
import { withBreadcrumb } from '@thojou/react-breadcrumb';

export default (label, path, Component) => ({
  label,
  path,
  component: compose(withBreadcrumb(label, path))(Component)
});
