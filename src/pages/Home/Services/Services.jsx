import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingButton from "../../../components/LoadingButton";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosSecure.get("/services");
      //   console.log(res);
      return res?.data;
    },
  });
  if (isLoading) {
    return <LoadingButton />;
  }

  return (
    <div className="mt-20 max-w-[1340px] mx-auto">
      <h1 className="text-indigo-800 text-center font-bold text-3xl">
        SEE OUR SERVICE PLAN
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {services?.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
