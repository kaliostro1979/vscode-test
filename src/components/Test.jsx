import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { asyncTest } from './../redux/slices/test.slice';

const Test = () => {

    const testData = useSelector((state) => state.main.test.test)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncTest())
    }, [dispatch])

    console.log(testData)

    return (
      <div>
        <h1>Test</h1>
      </div>
    )
};

export default Test;