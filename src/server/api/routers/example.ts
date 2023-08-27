import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const sleep = async (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  myNameIs: publicProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async ({ input }) => {
    await sleep(2000);
    return {
      greeting: `${input.name}, it's really you!`
    }
  }),

});
