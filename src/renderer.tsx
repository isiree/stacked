import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('React root element was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <main>
      <h1>Stacked</h1>
      <p>Your visual workload, one task at a time.</p>
    </main>
  </StrictMode>,
);
