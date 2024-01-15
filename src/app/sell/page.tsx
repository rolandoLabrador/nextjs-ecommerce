





export default async function BuyProduct() {


return (
<div 
  className="mt-20 hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">See what your car is worth</h1>
      <p className="mb-5">
        Get instant appraisal in as little as 30 seconds and we will pick up your car for free.
      </p>
      
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs"
      />

      <button className="mt-5  btn-primary btn">Get Started</button>
    </div>
  </div>
</div>

);
}