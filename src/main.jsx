
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
 <ThemeProvider>
        <AuthProvider>
            <CartProvider>
                <RouterProvider
                    router={router}
                />
            </CartProvider>
        </AuthProvider>
    </ThemeProvider>

)
