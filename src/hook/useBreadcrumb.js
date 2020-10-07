const useBreadcrumb = (label) => {
    const dispatch = useDispatch();
    const match   = useRouteMatch();
    const {level} = useContext(PageContext)

    useEffect(() => {
        if(!isNil(label)) {
            dispatch(addBreadcrumb({label, path: match.url, level}));
        }

        return () => {
            if(!isNil(label)) {
                dispatch(removeBreadcrumb(label));
            }

        }
    }, [dispatch, level, match]);
};

export default useBreadcrumb;