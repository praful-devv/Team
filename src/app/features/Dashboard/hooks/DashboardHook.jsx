import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'
import useTasks from '../../admin module/tasks/hooks/useTasks';



const DashboardHook = () => {

 const [task, setTask] = useState([]);

 const { data } = useTasks();

 useEffect(() => {
   if (data) {
     setTask(data);
   }
 }, [data]);

   
    


    const dispatch = useDispatch()
    const {mode} = useSelector(store => store.theme)

    function handleTheme(){
        dispatch(toggleTheme())
    }

  return { handleTheme ,mode ,task};
}

export default DashboardHook