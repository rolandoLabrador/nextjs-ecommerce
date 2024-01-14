import { useState } from "react";

import Subnavbar from "@/components/subnavbar";
import { prisma } from "@/lib/db/prisma";

export default async function BuyProduct() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      <Subnavbar products={products} />

      {/* <Sidebar /> */}
    </>
  );
}
