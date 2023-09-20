import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes ({ isLoggedIn }) {
  return (
    isLoggedIn
      ?	<Outlet/>
      : <Navigate to="/" replace />
  );
}

export default ProtectedRoutes;