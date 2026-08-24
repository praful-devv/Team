import Department from "../features/admin module/departments/ui/pages/Department";
import Documents from "../features/admin module/documents/ui/pages/Documents";
import Employee from "../features/admin module/employees/ui/pages/Employee";
import Task from "../features/admin module/tasks/ui/pages/Task";

export let adminRoutes = [
    {
        path:'/home/employee',
        element:<Employee/>
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