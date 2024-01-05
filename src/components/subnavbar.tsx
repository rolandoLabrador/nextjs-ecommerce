import React from 'react';
import { useRouter } from 'next/router';

const Subnavbar = () => {
  
  return (
    <div>
      <div className="mt-20 navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
         
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" name="searchQuery" />
            </div>
         
          {/* Rest of your code */}
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;