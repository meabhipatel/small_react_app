import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-semibold"> Page not found</h1>
      <Link to={"/"} className="mt-5 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
