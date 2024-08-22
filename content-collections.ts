import { defineCollection, defineConfig } from "@content-collections/core";

import { compileMDX } from "@content-collections/mdx";

import {
  createMetaSchema,
  createDocSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    full: z.boolean(),
  }),
  transform: async (document, context) => {
    // @ts-ignore
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [metas, docs],
});
