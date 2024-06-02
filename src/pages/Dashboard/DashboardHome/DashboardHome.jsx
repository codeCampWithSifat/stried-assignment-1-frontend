import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingButton from "../../../components/LoadingButton";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      //   console.log(res);
      return res?.data;
    },
  });

  if (isLoading) {
    return <LoadingButton />;
  }

  const handleDeleteService = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You Want Delete Your Item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Service has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead className="bg-indigo-600 text-center font-semibold text-white text-xl">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {services?.map((service, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={service.image} />
                  </div>
                </div>
              </td>
              <td>{service.name}</td>
              <td> ${service.price}</td>
              <td>
                <Link to={`/dashboard/serviceDetail/${service._id}`}>
                  <button className="btn btn-primary text-white">
                    Details
                  </button>
                </Link>
              </td>
              <td>
                <Link to={`/dashboard/editService/${service._id}`}>
                  <button className="btn btn-primary text-white">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteService(service._id)}
                  className="btn btn-error text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHome;
