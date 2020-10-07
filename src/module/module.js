import breadcrumbReducer from './slice';

export const getBreadcrumbModule = () => ({
    id: 'breadcrumb',
    reducerMap: {
        breadcrumb: breadcrumbReducer
    },
});


