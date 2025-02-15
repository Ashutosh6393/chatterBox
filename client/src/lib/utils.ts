import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { authClient } from "./auth-client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const login = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: import.meta.env.VITE_BASE_URL,
    disableRedirect: false,
  });
};

export const logout = async () => {
  await authClient.signOut();
};
