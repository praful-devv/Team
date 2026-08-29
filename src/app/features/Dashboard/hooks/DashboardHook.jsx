import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'

const DashboardHook = () => {

    const dispatch = useDispatch()
    const {mode} = useSelector(store => store.theme)

    function handleTheme(){
        dispatch(toggleTheme())
    }

  return { handleTheme ,mode};
}

export default DashboardHook