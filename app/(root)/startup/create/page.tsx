import React from "react";
import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <section className="">
      <div className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </div>
      <StartupForm />
    </section>
  );
};

export default page;
