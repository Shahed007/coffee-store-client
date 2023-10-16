import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import page404 from "../../assets/images/404/404.gif";

const ErrorPage = () => {
  const error = useRouteError();
  if(isRouteErrorResponse(error)){
    if (error.status === 404) {
      return <div className=" w-full">
        <img className="w-full h-full" src={page404} alt="404 image" />
      </div>;
    }
  }
}

export default ErrorPage