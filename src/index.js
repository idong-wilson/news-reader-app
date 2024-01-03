import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App';

const root = document.getElementById('root');
const rootContainer = root || document.createElement('div');
const rootElement = createRoot(rootContainer);
rootElement.render(<App />);