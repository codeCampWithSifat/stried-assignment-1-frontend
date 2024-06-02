/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        // console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${result?.user?.displayName} Login Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-4">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Please Login{" "}
        </h2>

        <form onSubmit={handleSubmit(handleLogin)}>
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
            value="Login"
            className="input input-bordered w-full bg-primary text-white my-4"
          />
        </form>
        <p>
          New To Sifat_Spa_Service{" "}
          <Link to="/signup" className="text-red-500">
            Create An Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
