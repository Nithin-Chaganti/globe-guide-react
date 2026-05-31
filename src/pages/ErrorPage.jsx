import { useRouteError,NavLink } from "react-router-dom";
const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div>
      <h1 className="heading-xl">404 Not Found</h1>
      <p className="paragraph">
        {error.statusText || error.message}
      </p>
      <NavLink to="/">
         <button>Go back to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
