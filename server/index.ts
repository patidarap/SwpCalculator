import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import os from 'os';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ... (keep your existing middleware)

(async () => {
  try {
    const server = await registerRoutes(app);

    // ... (keep your existing route and error handling)

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const getAvailablePort = async (basePort: number): Promise<number> => {
      const net = await import('net');
      return new Promise((resolve) => {
        const server = net.createServer();
        server.unref();
        server.on('error', () => {
          resolve(getAvailablePort(basePort + 1));
        });
        server.listen(basePort, () => {
          server.close(() => resolve(basePort));
        });
      });
    };

    const startServer = async () => {
      try {
        // Get network interfaces information
        const interfaces = os.networkInterfaces();
        log('Network interfaces:');
        Object.entries(interfaces).forEach(([name, details]) => {
          details?.forEach(detail => {
            log(`- ${name}: ${detail.address} (${detail.family})`);
          });
        });

        // Try to find an available port
        const port = await getAvailablePort(5000);
        const host = '127.0.0.1'; // Force localhost only

        log(`Attempting to start server on ${host}:${port}...`);

        server.listen(port, host, () => {
          log(`Server successfully started on http://${host}:${port}`);
          log(`Available on your local network at: http://${os.hostname()}:${port}`);
        }).on('error', (err: NodeJS.ErrnoException) => {
          log(`Critical error: ${err.message}`);
          log('Possible solutions:');
          log('1. Try a different port: PORT=5001 npm run dev');
          log('2. Check your firewall/antivirus settings');
          log('3. Run as Administrator');
          log('4. Restart your computer');
          process.exit(1);
        });

      } catch (error) {
        log(`Fatal startup error: ${error}`);
        process.exit(1);
      }
    };

    await startServer();

  } catch (error) {
    log(`Application initialization failed: ${error}`);
    process.exit(1);
  }
})();