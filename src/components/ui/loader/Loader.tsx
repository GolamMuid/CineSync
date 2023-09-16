import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <HashLoader color="#fff" size={200} />
    </div>
  );
}

export default Loader;
