import { CircularProgress } from '@mui/material';
import App from 'pages/App';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


const Main = () => {
    return (
        <BrowserRouter basename='/openapi'>
            <Suspense fallback={<CircularProgress />}>
                        <App />
            </Suspense>
        </BrowserRouter>
    );
};

createRoot(document.getElementById('root')).render(<Main />);
