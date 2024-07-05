import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="flex flex-auto justify-center flex-col max-w-7xl w-full mx-auto py-24 px-6">
      <p className="text-light-blue text-base leading-8 font-semibold">404</p>
      <h1 className="text-black text-3xl tracking-tight font-bold">
        No se han encontrado resultados
      </h1>
      <p className="text-blue-gray-800 text-base leading-7 mt-6">
        Lo sentimos, no hemos podido encontrar la pagina que estabas buscando
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="text-light-blue font-semibold leading-7 text-sm"
        >
          <span aria-hidden="true">←</span> Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default Page404;
