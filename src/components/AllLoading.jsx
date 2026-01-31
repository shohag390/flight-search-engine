import { PuffLoader } from "react-spinners";

const AllLoading = ({ loading = true }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <PuffLoader color="#FEBB76" loading={loading} size={80} />
    </div>
  );
};

export default AllLoading;
