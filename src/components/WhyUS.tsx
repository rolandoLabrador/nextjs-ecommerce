import data from "@/WhyData";



export default async function WhyUS() {
return (

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
    { data.map((item) => (
        
        <div key= {item.id} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={item.image} 
          alt={item.title1} 
          className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.title2}</h2>
           
          <p>{item.des}</p>
          
        </div>
        
      </div>
    
    
    
    
    
    
    ))}




</div>
);




}