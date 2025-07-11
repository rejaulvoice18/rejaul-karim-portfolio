import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
