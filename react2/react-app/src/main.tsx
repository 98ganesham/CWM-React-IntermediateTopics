import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient(
  
  
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />  
    </QueryClientProvider>
  </React.StrictMode>,
)
