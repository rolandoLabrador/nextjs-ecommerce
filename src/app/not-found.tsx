const NotFound = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="card w-96 bg-neutral text-neutral-content card-body items-center shadow-2xl ">
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize">page Not Found</h2>
            <div className="card-actions justify-end">
              <h2 className="text-4xl font-bold text-red-500">404 !</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  