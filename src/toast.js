import { toast } from "react-toastify"
const toastConfig = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
}

export const toastSuccess = message => {
  toast.success(message, toastConfig)
}
export const toastError = message => {
  toast.error(message, toastConfig)
}
export const toastInfo = message => {
  toast.info(message, toastConfig)
}
export default toastConfig
