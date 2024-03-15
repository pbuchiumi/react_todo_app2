import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Todo } from './Todo';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
