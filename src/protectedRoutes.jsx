import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, redirectPath = "/", children }) => {
  console.log(auth);
  if (!auth?.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default ProtectedRoute;
