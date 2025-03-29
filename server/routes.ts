import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a client-side only calculator application
  // we don't need any API routes
  
  const httpServer = createServer(app);
  return httpServer;
}
