 

const ImageCards = ({ id, img, title, price, author, icn1, icn2 }) => {
  return (
    <div>
      <div className="rounded-lg bg-white shadow-lg p-2">
        <div className=" h-[200px] overflow-hidden rounded-2xl">
          <img
            src={img}
            alt={title}
            className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer "
          />
        </div>
        <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">
          {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
        </p>
        <div className=" flex justify-between items-center mt-2">
          <div className="">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">Price : ${price}</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            {icn1}
            {icn2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
