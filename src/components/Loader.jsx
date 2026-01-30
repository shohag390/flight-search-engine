import {
  ClipLoader,
  GridLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
} from "react-spinners";

const Loader = ({ loading = true }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-4">
      <PuffLoader
        color="#2563EB"
        loading={loading}
        size={30}
        aria-label="Loading flights..."
      />
      <p className="text-sm font-medium text-gray-600">
        Searching best flights...
      </p>
    </div>
  );
};

export default Loader;
