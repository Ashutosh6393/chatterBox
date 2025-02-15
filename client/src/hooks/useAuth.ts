import { fetchUserSession } from "@/store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user, status } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserSession());
    }
  }, [status, dispatch]);

  return { isAuthenticated, user, status };
};

export default useAuth;
