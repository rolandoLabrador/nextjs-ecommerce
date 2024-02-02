export async function getMarketValue(vin: string, mileage: number) {
  const response = await fetch(
    `https://car-utils.p.rapidapi.com/marketvalue?vin=${vin}&mileage=${mileage}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "X-RapidAPI-Key": "e1eb64bc2fmsh6e5597cb7964124p112e8ejsn27f21cf000e8",
        "X-RapidAPI-Host": "car-utils.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  return data;
}
