// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@react-pdf-viewer/core', '@react-pdf-viewer/pdfjs'],
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-pdf-viewer/core', '@react-pdf-viewer/pdfjs'],
  },
  server: {
    host: '0.0.0.0',  // This will make the server accessible on any network interface
    // port: 3000,  // You can specify the port here
  },
});
