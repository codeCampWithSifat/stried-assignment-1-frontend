/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (data) => {
    // console.log(data);

    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name)
          .then((result) => {
            // console.log(result);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} Sign Up Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-4">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Please Register
        </h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md mt-2"> Your Name</span>
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p role="alert" className="text-red-600 my-2">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md"> Email</span>
            </label>
            <input
              {...register("email", { required: "Email is Required" })}
              type="email"
              className="input input-bordered w-full "
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p role="alert" className="text-red-600 my-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 Or More Characters",
                },
                pattern: {
                  value: /(?=.*?[0-9])/,
                  message: "Password At Least 1 Letter",
                },
              })}
              type="password"
              className="input input-bordered w-full "
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p role="alert" className="text-red-600 my-2">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="input input-bordered w-full bg-primary text-white my-4"
            value="Register"
          />
        </form>
        <p>
          Already Have An Account{" "}
          <Link to="/login" className="text-red-500">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
