import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";

import agents from "./agents";

const mastra = new Mastra({
  agents,
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});

export { mastra };
