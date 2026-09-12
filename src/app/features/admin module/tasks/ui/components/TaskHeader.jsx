import React from 'react'
import { useNavigate } from 'react-router-dom';

const TaskHeader = () => {

 let navigate = useNavigate()
  return (
    <div className="py-4 flex justify-between flex-wrap">
     
      <h2 className="text-3xl font-bold">Tasks Management</h2>
      <button
        onClick={() => navigate("/home/addTask")}
        className="bg-(--text-four) px-4 py-2 rounded"
      >
        AddTask
      </button>
    </div>
  );
}

export default TaskHeader;