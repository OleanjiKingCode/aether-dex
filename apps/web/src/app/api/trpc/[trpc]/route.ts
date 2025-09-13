import type { NextRequest } from "next/server";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { env } from "@/env";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

const createContext = async (req: NextRequest) => {
  return await Promise.resolve(
    createTRPCContext({
      headers: req.headers,
    }),
  );
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    createContext: () => createContext(req),
    endpoint: "/api/trpc",
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
    req,
    router: appRouter,
  });

export { handler as GET, handler as POST };
