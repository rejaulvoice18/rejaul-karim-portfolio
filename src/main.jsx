import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
// bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    
  </StrictMode>,
)
