import { clsx, type ClassValue } from "clsx";
import { authClient } from "./auth-client";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authLogin = async (): Promise<void> => {
  try {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: import.meta.env.VITE_BASE_URL,
        disableRedirect: false,
      },
      {
        onError: () => {
          toast("Unable to login", {
            position: "top-center",
          });
        },
      }
    );
  } catch (error) {
    console.log("error logging in");
  }
};

export const authLogout = async () => {
  try {
    const { error } = await authClient.signOut();

    if (error) {
      toast("Unable to logout", {
        position: "top-right",
      });
    }
  } catch (error) {
    console.log("error logging out");
  }
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unknown error occurred";
  }

  return message;
};
