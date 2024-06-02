import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="m-10">
          <h2 className="text-indigo-800 font-bold text-xl">
            Welcome To Your Dashboard
          </h2>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>Email : {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
