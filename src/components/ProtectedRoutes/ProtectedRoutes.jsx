import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes () {
  const { isLoggedIn } = useSelector((state) => state.auth);
  
  return (
    isLoggedIn
      ?	<Outlet/>
      : <Navigate to="/" replace />
  );
}

export default ProtectedRoutes;