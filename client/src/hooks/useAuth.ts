// // import { fetchUserSession } from "@/store/features/authSlice";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { useEffect } from "react";

// const useAuth = () => {
//   const dispatch = useAppDispatch();
//   const { isAuthenticated, user } = useAppSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (status === "idle") {
//       // dispatch(fetchUserSession());

//       // console.log("session dispatch called");
//     }
//     // console.log("useEffect auth called");
//   }, [dispatch, status]);

//   return { isAuthenticated, user, isLoading, status };
// };

// export default useAuth;
