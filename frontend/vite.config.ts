import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 200,
    },
    hmr: {
      port: 7000,
      path: "/hmr",
    },
  },
});
