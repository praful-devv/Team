import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getAllTasks } from '../../../admin module/tasks/apis/taskAPI';

const useEmpTask = () => {

    let { data } = useQuery({
      queryKey: ["Tasks", ],
      queryFn: () => getAllTasks(),
    });
  return {data}
}

export default useEmpTask