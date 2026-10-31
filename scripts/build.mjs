import { cp, rm, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await cp('salida-publicacion/wwwroot', 'dist', { recursive: true });
await copyFile('dist/index.html', 'dist/404.html');
console.log('Blazor publicado en dist/.');
