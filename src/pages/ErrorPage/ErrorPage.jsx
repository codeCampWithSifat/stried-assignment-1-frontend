import { Link } from "react-router-dom";

const ErrorPage = () => {
  // console.error(error);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-red-800 text-5xl">
          Something Went Wrong..... Try Agian Later
        </h2>
        <div className="text-center mt-10">
          <Link to="/">
            <button className="btn btn-error text-white">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
