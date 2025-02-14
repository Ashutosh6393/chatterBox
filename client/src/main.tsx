import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "@/components/ProtededRoutes.tsx";
import { createRoot } from "react-dom/client";
import { store } from "@/store/store.ts";
import { Provider } from "react-redux";
import { Home, Chat } from "@/pages";
import { StrictMode } from "react";
import App from "./App.tsx";

import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="chat" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    <Toaster />
  </StrictMode>
);
