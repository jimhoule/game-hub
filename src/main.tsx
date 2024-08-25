import React from 'react'
import ReactDOM from 'react-dom/client'
// Providers
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { ReactQueryProvider } from './providers/ReactQueryProvider.tsx';
import { RoutesProvider } from './providers/RoutesProvider.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>  
            <ReactQueryProvider>
                <RoutesProvider />
            </ReactQueryProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
