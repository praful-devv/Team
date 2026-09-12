import Documents from "../features/admin module/documents/ui/pages/Documents";
import Employee from "../features/admin module/employees/ui/pages/Employee";
import Task from "../features/admin module/tasks/ui/pages/Task";
import AddEmployee from "../features/admin module/employees/ui/pages/AddEmployee";
import AddTask from "../features/admin module/tasks/ui/components/AddTask";

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
        path:'/home/task',
        element:<Task/>
    },
    {
        path:'/home/documents',
        element:<Documents/>
    },
    {
        path:'/home/addTask',
        element:<AddTask/>
    }
]