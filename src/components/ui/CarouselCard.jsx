const CarouselCard = ({ url, name, info, price, discount }) => {
  return (
    <div className="mx-auto my-8 w-72 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={url}
        alt={name}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-light-green">{name}</h2>
        <p className="mb-2 text-base text-blue-gray-600">{info}</p>
        <div className="flex items-center gap-2">
          <div>
            {discount > 0 && (
              <p className="mr-2 text-lg font-semibold text-blue-gray-700">
                Antes:
              </p>
            )}
            <p
              className={`${
                discount > 0 && "line-through"
              } mr-2 text-lg font-semibold text-blue-gray-700`}
            >
              {`₡${price}`}
            </p>
          </div>
          {discount > 0 && (
            <>
              <div>
                <p className="mr-2 text-lg font-semibold text-blue-gray-700">
                  Ahora:
                </p>
                <p className="text-base font-medium text-blue-gray-700">
                  {`₡${Math.floor(price - price * (discount / 100))}`}
                </p>
              </div>
              <p className=" flex justify-center items-center h-12 w-12 bg-red rounded-full  ml-auto text-base font-semibold text-white">{`-${discount}%`}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
