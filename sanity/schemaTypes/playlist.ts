import { defineField, defineType } from "sanity";

export const playlist = defineType({
  name: "playlist",
  title: "Playlists",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "select",
      type: "array", // needs to be installed - sanity-plugin-markdown
      of: [{ type: "reference", to: [{ type: "startup" }] }],
    }),
  ],
});
