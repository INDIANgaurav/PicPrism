import ImageCards from "./ImageCards";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20 ">
        {/* image card */}
        <ImageCards
          title="The beach"
          author="gaurav"
          img="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          price={10}
          icn1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icn2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCards
          title="Insta"
          author="John"
          img="https://fps.cdnpk.net/images/ai/tti/ai-image-generator-interface-dark-v2.webp?w=640&h=1920&q=75"
          price={12}
          icn1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icn2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCards
          title="The Tree"
          author="John"
          img="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={12}
          icn1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icn2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
