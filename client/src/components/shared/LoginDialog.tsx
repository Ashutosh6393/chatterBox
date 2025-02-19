import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { CgSpinner } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";

type loginHandlerType = ()=> Promise<void>;

type Props = {
  loginHandler: loginHandlerType;
  children: React.ReactNode;
};

const LoginDialog = ({ children,  loginHandler}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(){
    setIsLoading(true);
    loginHandler().then(()=>{
      setIsLoading(false);
    })
    
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-3xl">
            Login
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Welcome back!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center gap-4">
          <Button
            disabled={isLoading}
            className={`flex-1 `}
            onClick={handleLogin}
          >
            {isLoading && <CgSpinner className="animate-spin text-xl" />}
            <FaGoogle />
            Login with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
