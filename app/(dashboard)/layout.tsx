import React, { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid grid-cols-7">
      <div id="side-bar" className="col-span-1 bg-[#FFF] h-[1047px]">
        <Sidebar />
      </div>
      <section className="col-span-6 bg-[#FAFAFB] h-full py-12 px-8">
        <Header />
        {children}
      </section>
    </main>
  );
};

export default layout;
