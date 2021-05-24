import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeError } from '../../cat/Store/CatBundle';
import { getErrorMessage } from '../../cat/Store/CatSelector';

const DEFAULT_CLASSNAME = 'error-message';
const ErrorMessage = React.memo((props) => {
    const error = useSelector(getErrorMessage);
    const dispatch = useDispatch();
    const time = React.useRef(undefined);

    React.useEffect(() => {
        clearTimeout(time.current);
        time.current = setTimeout(() => {
            dispatch(changeError(undefined));
        }, 5000);
    }, [dispatch, error])

    if (error) {
        return <div className={DEFAULT_CLASSNAME}>{error}</div>;
    }
    else {
        return null;
    }
});

export default ErrorMessage;