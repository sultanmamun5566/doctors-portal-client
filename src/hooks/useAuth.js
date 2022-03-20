import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;