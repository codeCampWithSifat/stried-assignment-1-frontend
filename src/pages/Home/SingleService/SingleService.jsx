/* eslint-disable react/prop-types */
const SingleService = ({ service }) => {
  // console.log(service);
  const { image, name, description, price } = service;
  return (
    <div>
      <div className="card  glass mt-12 ">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body text-center">
          <h3 className="text-indigo-800 text-2xl font-bold">{name}</h3>
          <h3 className="text-indigo-800 text-2xl font-bold">
            Price : $ {price}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
