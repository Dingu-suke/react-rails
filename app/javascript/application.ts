// app/javascript/application.ts
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(<Hello name="Rails with TypeScript and React!" />, root);
  }
});