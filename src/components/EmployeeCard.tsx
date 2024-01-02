import data from "@/Ourteam";
const EmployeeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {data.map((item) => (
        <div key={item.id} className="bg-white p-9 rounded-md">
          <div className="flex items-center justify-center mb-4">
            <img
              src={item.image}
              alt={item.title1}
              className="w-45 h-45 rounded-full"
            />
          </div>
          <h1 className="text-[#999da3] text-xl font-normal my-3 shadow-xl">
            {item.title1}
          </h1>
          <h2 className="text-3xl font-semibold my-3 ">{item.title2}</h2>
          <p className="text-sm">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
