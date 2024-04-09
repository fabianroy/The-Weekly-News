import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-fit mx-auto text-center mt-52" id="error-page">
      <h1 className="text-4xl">404</h1>
      <p className="text-2xl mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl mt-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/"><button className="btn mt-10 ">Back To Safety</button></Link>
    </div>
  );
}