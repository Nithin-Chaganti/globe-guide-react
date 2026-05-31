import { useRouteError,NavLink } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    const message = error?.statusText || error?.message || "Something went wrong.";
  return (
    <div>
      <h1 className="heading-xl">404 Not Found</h1>
      <p className="paragraph">
        {message}
      </p>
      <NavLink to="/">
         <button>Go back to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
