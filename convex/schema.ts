import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  documents: defineTable({
    content: v.string(),
    lastModified: v.float64(),
    title: v.string(),
    userId: v.string(),
  }),
});
