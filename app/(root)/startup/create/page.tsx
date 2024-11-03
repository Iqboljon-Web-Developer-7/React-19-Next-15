import React from "react";
import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <section className="pink_container !min-h-[230px]">
      <h1 className="heading">Submit Your Startup</h1>
      <StartupForm />
    </section>
  );
};

export default page;
