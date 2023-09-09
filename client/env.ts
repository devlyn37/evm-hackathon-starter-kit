import { z } from "zod";
import "dotenv/config";

const envVariables = z.object({
  NEXT_PUBLIC_WC_PROJECT_ID: z.string(),
  NEXT_PUBLIC_MAINNET: z.string().default("false"),
});

export const env = envVariables.parse(process.env);
