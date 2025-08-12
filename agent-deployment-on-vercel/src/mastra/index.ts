import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { VercelDeployer } from "@mastra/deployer-vercel";
import { MastraJwtAuth } from "@mastra/auth";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  deployer: new VercelDeployer(),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  server: {
    experimental_auth: new MastraJwtAuth({
      secret: process.env.MASTRA_JWT_SECRET,
    }),
  },
});
