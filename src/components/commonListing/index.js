"use client";

import { useRouter } from "next/navigation";
import ProductButtons from "./productButtons";
import ProductTile from "./productTile";
import { useEffect } from "react";
import Notification from "../Notification";


export default function CommonListing({data}) {

  const router = useRouter();

  useEffect(()=>{
    router.refresh() 
  },[])

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {
            data && data.length ? 
            data.map(item=>
              <article className="relative flex flex-col overflow-hidden border cursor-pointer" key={item.id}>
                <ProductTile item ={item} />
                <ProductButtons item = {item}/>
              </article>
              ): null
          }
        </div>
      </div>
      <Notification/>
    </section>
  );
}