import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isNil } from 'ramda';
import { Context } from '../context/Context';
import { addBreadcrumb, removeBreadcrumb } from '../module/slice';

const useBreadcrumb = (label, path = '/') => {
  const dispatch = useDispatch();
  const { level } = useContext(Context);

  useEffect(() => {
    if (!isNil(label)) {
      dispatch(addBreadcrumb({ label, path, level }));
    }

    return () => {
      if (!isNil(label)) {
        dispatch(removeBreadcrumb(label));
      }
    };
  }, [dispatch, level, label, path]);
};

export default useBreadcrumb;
