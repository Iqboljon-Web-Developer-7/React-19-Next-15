import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_SINGLE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const post = await client.fetch(STARTUPS_SINGLE_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default page;
