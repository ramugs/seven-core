import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorToast = (message) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default errorToast;
