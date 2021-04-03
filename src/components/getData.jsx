import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setData } from '../store/actions';

const GetData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData());
    }, [])

    return " ";
};

export default connect(null, { setData })(GetData);