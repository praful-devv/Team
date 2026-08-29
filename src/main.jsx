import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js"; 
import {Provider} from 'react-redux'
import MainRoutes from "./app/routes/MainRoutes.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  </QueryClientProvider>,
);
