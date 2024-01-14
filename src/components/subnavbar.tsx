"use client";

import React, { useState } from "react";

type TProps = {
  products: any[];
};

const Subnavbar = (props: TProps) => {
  const { products } = { ...props };
  const [searchValue, setSearchValue] = useState("");

  const productArray = products?.map((item) =>
    item?.name?.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
  );

  return (
    <>
      <div className="navbar mt-20 bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl">daisyUI</a>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search"
              className="input-bordered input w-24 md:w-auto"
              name="searchQuery"
            />
          </div>

          {/* Rest of your code */}
        </div>
      </div>

      <br></br>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {productArray.map((item: any, index: number) => {
          if (!item) return null;

          return (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={item.imageUrl} alt="Shoes" className="rounded-xl" />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title">{item?.name}</h2>
                <p>{item?.description}</p>
                <h6>{`$${item?.price}`}</h6>
                <div className="card-actions">
                  <button className="btn-primary btn">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Subnavbar;
