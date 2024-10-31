import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // This makes the server listen on all addresses
        port: 5173, // Optional: Specify a port if you want
    },
});
