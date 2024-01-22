import data from "@/Ourteam";



const EmployeeCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
     { data.map((item) => (
        <div key={item.id} className="rounded-md bg-white p-9">
          <div className="mb-4 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title1}
              className="w-45 h-45 rounded-full"
            />
          </div>
          <h1 className="my-3 text-xl font-normal text-[#999da3] shadow-xl">
            {item.title1}
          </h1>
          <h2 className="my-3 text-3xl font-semibold ">{item.title2}</h2>
          <p className="text-sm">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
