import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const imageBB_Upload_Key = import.meta.env.VITE_imageBB_Upload_Secret;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageBB_Upload_Key}`;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  const handleLogin = async (data) => {
    // console.log(data);
    // console.log(data);
    const formData = new FormData();
    // image upload to imgbb and then get an url from imgbb
    const imageFile = { image: data.image[0] };
    formData.append("file", imageFile);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    // console.log(res);
    if (res.data?.success) {
      const menuItem = {
        title: data.title,
        name: data.name,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data?.data?.display_url,
      };
      const addService = await axiosSecure.post(`/services`, menuItem);
      //   console.log(addService);
      if (addService.data?.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} Add A Item Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-4 mt-40">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Add A Service{" "}
        </h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Title</span>
            </label>
            <input
              {...register("title", { required: "Title is Required" })}
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter Your Title"
            />
            {errors.title && (
              <p role="alert" className="text-red-600 my-2">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is Required",
              })}
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter Your Service Name"
            />
            {errors.name && (
              <p role="alert" className="text-red-600 my-2">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Price</span>
            </label>
            <input
              {...register("price", {
                required: "Price is Required",
              })}
              type="number"
              className="input input-bordered w-full "
              placeholder="Enter Your Price"
            />
            {errors.price && (
              <p role="alert" className="text-red-600 my-2">
                {errors.price?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is Required",
              })}
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter Your description"
            />
            {errors.description && (
              <p role="alert" className="text-red-600 my-2">
                {errors.description?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Image Link</span>
            </label>
            <input
              {...register("image", {
                required: "Image is Required",
              })}
              type="file"
              className="input input-bordered w-full "
              placeholder="Enter Your Image Link"
            />
            {errors.image && (
              <p role="alert" className="text-red-600 my-2">
                {errors.image?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Add Service"
            className="input input-bordered w-full bg-primary text-white my-4"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
