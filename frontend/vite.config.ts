import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load environment before trying to build the config
  // NB: loadEnv can take a third parameter, allowing to remove the annoying "VITE_" prefix if needed
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(process.env.VITE_PORT),
      host: true,
      allowedHosts: true,
      watch: {
        // Windows limitation
        usePolling: true,
        interval: 200,
      },
      hmr: {
        clientPort: Number(process.env.GATEWAY_PORT),
      },
    },
  });
};
