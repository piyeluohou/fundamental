import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import ContextMemo from './demo/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <ContextMemo />
  </StrictMode>,
);
