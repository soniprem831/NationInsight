import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

 
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
            <h1>Oops!An Error Occured.</h1>
             {
                error&& <p>{error.data}</p>
             }
            </p>
          </div>
        </div>
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  

};