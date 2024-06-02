import { HiArrowCircleRight } from "react-icons/hi";
import whychoseus from "../../../assets/images/whychoseus.jpg";

const WhyChoseUs = () => {
  return (
    <div className="mt-16">
      <h2 className="text-indigo-800 text-center text-3xl m-10 font-bold">
        Only For Female
      </h2>
      <div className="hero  bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mx-6">
            <h1 className="text-4xl font-bold text-indigo-800">
              WHY CHOOSE US?
            </h1>
            <p className="my-8">
              Our product is fully personalized and well balanced for all age of
              customers or adults. <br /> We maintain the standards by lorem
              ipsum and certified by dolor set amet.
            </p>
            <div>
              <div className="flex">
                <p className="mt-2">
                  <HiArrowCircleRight />
                </p>
                <p className="mt-1 mx-2"> Created from natural herbs</p>
              </div>
              <div className="flex">
                <p className="mt-2">
                  <HiArrowCircleRight />
                </p>
                <p className="mt-1 mx-2"> 100% safe for your skin</p>
              </div>
              <div className="flex">
                <p className="mt-2">
                  <HiArrowCircleRight />
                </p>
                <p className="mt-1 mx-2">Unique from other spa treatments</p>
              </div>
              <div className="flex">
                <p className="mt-2">
                  <HiArrowCircleRight />
                </p>
                <p className="mt-1 mx-2">
                  Created by medical professionals of spa lab
                </p>
              </div>
              <div className="flex">
                <p className="mt-2">
                  <HiArrowCircleRight />
                </p>
                <p className="mt-1 mx-2">Special gifts & offers for you</p>
              </div>
            </div>
          </div>
          <img
            src={whychoseus}
            alt=""
            className=" lg:w-1/2 md:w-4/5 sm:4/5 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
