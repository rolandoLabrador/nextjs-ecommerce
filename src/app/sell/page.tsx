"use client";

import { getMarketValue } from "@/service/third-party";
import { useState } from "react";
import { toast } from "react-toastify";

export default function BuyProduct() {
  const [hasVin, setHasVin] = useState(false);
  const [vinNumber, setVinNumber] = useState("");
  const [mileage, setMileage] = useState("");
  const [carData, setCarData] = useState<any>(null);

  const toggleHasVin = () => setHasVin((prevState) => !prevState);

  function handleGetStarted() {
    if (vinNumber.length < 6) {
      toast.error("Vin number must be at least 6 characters long.");
      return;
    }

    if (vinNumber.length > 19) {
      toast.error("Vin number must not exceed 19 characters.");
      return;
    }

    toggleHasVin();
  }

  async function handleSubmit() {
    const isNumber = !isNaN(Number(mileage));

    if (!isNumber) {
      toast.error("Please enter a valid mileage number.");
      return;
    }

    try {
      const response = await getMarketValue(vinNumber, Number(mileage));
      setCarData(response || null);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      toast.error("Exception: unable to call api.");
    }
  }

  return (
    <div
      className="hero mt-20 min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1615589658982-a8203e127a52?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            See what your car is worth
          </h1>
          <p className="mb-5">
            Get instant appraisal in as little as 30 seconds and we will pick up
            your car for free.
          </p>

          {!hasVin && !carData && (
            <>
              <input
                type="text"
                placeholder="Enter your VIN"
                className="input-bordered input w-full max-w-xs"
                value={vinNumber}
                onChange={(event) => setVinNumber(event.target.value)}
              />

              <button
                className="btn-primary btn mt-5"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </>
          )}

          {hasVin && !carData && (
            <>
              <input
                type="text"
                placeholder="Enter your Mileage"
                className="input-bordered input w-full max-w-xs"
                value={mileage}
                onChange={(event) => setMileage(event.target.value)}
              />

              <br></br>

              <button className="btn-primary btn mt-5" onClick={handleSubmit}>
                Submit
              </button>
            </>
          )}

          <br></br>

          {carData && (
            <div className="card mt-5 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">{carData?.vehicle}</h2>
                <p>${carData?.prices?.below}</p>

                <div className="card-actions justify-end">
                  <button
                    className="btn-primary btn"
                    onClick={() => {
                      toggleHasVin();
                      setCarData(null);
                      setVinNumber("");
                      setMileage("");
                    }}
                  >
                    Retry
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
