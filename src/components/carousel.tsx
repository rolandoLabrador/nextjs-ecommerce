"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselD  () {
  const products = [
    { id: 1, name: "Vacuum", price: 100, description: "Dyson, its the best" },
    { id: 2, name: "Piano", price: 200, description: "Has 88 keys" },
    { id: 3, name: "Keyboard", price: 50, description: "Great QWERTY set up" },
  ];

  return (
    <div className="w-full flex justify-center items-center min-h-screen z-50">
      <Carousel className="w-1/2">
        <CarouselContent>
          {products.map((product, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div className="text-white w-full text-2xl bg-slate-900/40 p-4 border border-slate-900 rounded-lg flex flex-col shadow-2xl">
                {product.name}
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center mt-2">
                    <div className="h-[1px] w-4 bg-white" />{" "}
                    <div className="text-xl my-2 ml-2 flex gap-x-2 items-baseline">
                      ${product.price}
                      <ul className="text-start text-md font-light opacity-50 my-2 text-sm hidden md:flex">
                        | {product.description}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/50 border-white/50 z-50" />
        <CarouselNext className="bg-white/50 border-white/50 z-50" />
      </Carousel>
    </div>
  );
}