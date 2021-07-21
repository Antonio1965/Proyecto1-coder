import  Error  from "../../img/error-2120.jpg";

export const Error404 = () => {
  return (
    <>
      <div className="container pagina-error">
        <h2 className="pagina-error"> No Hay Pagina Para Mostrar- Error-404</h2>
        <img src={Error} alt="Sin pagina" />
      </div>
    </>
  );
};