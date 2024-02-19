import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createDocument = mutation({
  args: {
    title: v.string(),
    content: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new Error('You need to be logged in to create a document');
    }

    await ctx.db.insert('documents', {
      title: args.title,
      content: args.content || '',
      userId: user.subject,
      lastModified: Date.now(),
    });
  },
});

export const getDocumentsForUser = query({
  args: {},
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    const documents = await ctx.db.query('documents').collect();

    const filteredDocuments = documents.filter(
      (doc) => doc.userId === user?.subject
    );

    return filteredDocuments;
  },
});

export const saveDocument = mutation({
  args: {
    id: v.id('documents'),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, title, content } = args;

    await ctx.db.patch(id, {
      title: title,
      content: content,
      lastModified: Date.now(),
    });
  },
});

export const getDocumentById = query({
  args: { id: v.id('documents') },
  handler: async (ctx, args) => {
    const document = await ctx.db.get(args.id);
    return document;
  },
});
