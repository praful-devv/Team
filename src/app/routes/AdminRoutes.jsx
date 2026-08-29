import { Children } from "react";
import Department from "../features/admin module/departments/ui/pages/Department";
import Documents from "../features/admin module/documents/ui/pages/Documents";
import Employee from "../features/admin module/employees/ui/pages/Employee";
import Task from "../features/admin module/tasks/ui/pages/Task";
import AddEmployee from "../features/admin module/employees/ui/pages/AddEmployee";

export let adminRoutes = [
    {
        path:'/home/employee',
        element:<Employee/>,
        
    },
    {
         path:'/home/addEmployee',
                element:<AddEmployee/>
    },
    
    {
        path:'/home/department',
        element:<Department/>
    },
    {
        path:'/home/task',
        element:<Task/>
    },
    {
        path:'/home/documents',
        element:<Documents/>
    }
]