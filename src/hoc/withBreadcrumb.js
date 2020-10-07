import useBreadcrumb from "../hook/useBreadcrumb";
import {Provider} from '../context/Context';

const withBreadcrumb = (label) => WrappedComponent => {
    const WithBreadcrumb = props => {
        useBreadcrumb(label);

        return (
            <Provider>
                <WrappedComponent {...props} />
            </Provider>
        );
    };

    WithBreadcrumb.displayName = `withBreadcrumb(${WrappedComponent.displayName || WrappedComponent.name})`;
    WithBreadcrumb.WrappedComponent = WrappedComponent;

    return WithBreadcrumb;
};

export default withBreadcrumb;