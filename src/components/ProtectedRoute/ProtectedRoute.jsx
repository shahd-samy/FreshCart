import { useContext } from "react"
import { AuthContext } from "../../context/Auth.context"
import { Navigate, useLocation, useNavigate } from "react-router";
import Loading from "../Loading/Loading";

export default function ProtectedRoute({children}) {

    const { token,isVerified ,loading} = useContext(AuthContext);
    const {pathname} = useLocation()
    console.log(pathname)

    if (!isVerified &&!loading) {
    return (
      <Navigate to="/login" state={{ from: location.pathname }} />
    );
  }

  return children;



}
