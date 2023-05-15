import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead

// src/Title.js

import React from 'react'

function Title() {
  return (
    <div>
      <h1>SFPOPOS</h1>
    </div>
  )
}

export default Title