import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";

import { login } from "@/lib/utils";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const LoginDialog = ({ children }: Props) => {
  const [loading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      toast("Event has been created.");
    } finally {
      setIsLoading(false);
    }
  };
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
            disabled={loading}
            className={`flex-1 `}
            onClick={handleLogin}
          >
            {loading && <CgSpinner className="animate-spin text-xl" />}
            <FaGoogle />
            Login with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
