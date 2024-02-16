"use client";

import CookieConsentBanner from "@/components/cookieBanner";
import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  return (
 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto lg:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" mr-auto place-self-center lg:col-span-7">
            <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Featured Products
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Products On Sale
              </p>
          </div>
        </div>
      </section>
    </main>
  );
}
