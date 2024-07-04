 
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center item-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div>
        <div className="rounded-lg bg-white shadow-lg p-2">

        {/* image card */}
        <div className="w-full h-[200px] overflow-hidden rounded-2xl" >
          <img src="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="asset"
          className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer "
          />

        </div>
        <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3"> @GauravParasar</p>
      </div>
          </div>
        <div>
          <div>
            <h3 className="">The Beach</h3>
          </div>
        </div>
    </div>
  )
}

export default PhotoGallery