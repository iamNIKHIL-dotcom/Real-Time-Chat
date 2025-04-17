import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <div>
        Navbar
    </div>
  );
};
export default Navbar;