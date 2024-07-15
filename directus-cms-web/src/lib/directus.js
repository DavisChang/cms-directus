import { createDirectus, rest } from "@directus/sdk";

const client = createDirectus(process.env.API_HOST).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default client;
