// import React from 'react'
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const __dirname = import.meta.dirname;
  const cssFiles = fs.readdirSync(path.resolve(__dirname, 'styles'))
    .filter(file => file.endsWith('.scss'))
    .map(file => path.resolve(__dirname, 'styles', file));
  const css = cssFiles.map(file => fs.readFileSync(file, 'utf8')).join('\n');

  return { html, css }
}
