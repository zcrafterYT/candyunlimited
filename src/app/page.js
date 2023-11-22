<<<<<<< HEAD
"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";


export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

=======
'use client'

import { GlobalContext } from "@/context";
import { useContext } from "react";




export default function Home() {

  const {isAuthUser} = useContext(GlobalContext)
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)

  return (
<<<<<<< HEAD
 
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <section className="">
    //     <div className="grid max-w-screen-xl px-4 py-8 mx-suto lg:gap-0 lg:py-16 lg:grid-cols-12">
    //       <div className=" mr-auto place-self-center lg:col-span-7">
    //         <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
    //           Featured Products
    //           </h1>
    //           <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
    //             Products On Sale
    //           </p>
    //           <button
    //           type="button"
    //           onClick={() => router.push("/product/listing/all-products")}
    //           className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    //         >
    //           Explore Shop Collection
    //         </button>
    //       </div>
    //       <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
    //         <img
    //           src="https://i.ebayimg.com/images/g/3DMAAOSwVjdjFgr7/s-l1200.webp"
    //           alt="Explore Shop Collection"
    //         />
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<<<<<<< HEAD
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            all Products
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
            lacus meleifend menean diverra loremous.
          </p>

          <button
            type="button"
            onClick={() => router.push("/product/listing/all-products")}
            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            Explore Products
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="shrinkToFit"
            src="https://health.wordpress.clevelandclinic.org/wp-content/uploads/sites/3/2021/03/candy-different-kinds-169974555_770x533.jpg"
            alt="Explore Shop Collection"
          />
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {products && products.length
                ? products
                    .filter((item) => item.onSale === "yes")
                    .splice(0, 2)
                    .map((productItem) => (
                      <li
                        onClick={() =>
                          router.push(`/product/${productItem._id}`)
                        }
                        className="cursor-pointer"
                        key={productItem._id}
                      >
                        <div>
                          <img
                            src={productItem.imageUrl}
                            alt="Sale Product Item"
                            className="object-cover w-full rounded aspect-square"
                          />
                        </div>
                        <div className="mt-3">
                          <h3 className="font-medium text-gray-900">
                            {productItem.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-800">
                            ${productItem.price}{" "}
                            <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                          </p>
                        </div>
                      </li>
                    ))
                : null}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
            SHOP BY CATEGORY
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <div className="relative block group">
              <img
                src="https://assets-raffall.ams3.cdn.digitaloceanspaces.com/raffalls/33322/2020071009343517177752115f08362b63e167.08699669.png"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">America</h3>
                <button
                  onClick={() => router.push("/product/listing/American")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="relative block group">
              <img
                src="https://m.media-amazon.com/images/I/91iOJUNksVL._SL1500_.jpg"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Chinese</h3>
                <button
                  onClick={() => router.push("/product/listing/Chinese")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative block group">
              <img
                src="https://m.media-amazon.com/images/I/81gX1ydxuSL._SL1500_.jpg"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Japanese </h3>
                <button
                  onClick={() => router.push("/product/listing/Japanese")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
  );
=======
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>placeholder Name</h1>
    </main>
  )
>>>>>>> bb43738 (WIP)
=======
      <h1>placeholder Name</h1>
    </main>
  );
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
}

