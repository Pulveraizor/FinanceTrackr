import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import LoginForm from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import RegisterForm from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AllTransactions from "./pages/AllTransactions";
import DepositForm from "./pages/Deposit";
import WithdrawalForm from "./pages/Withdrawal";
import GroupsManager from "./pages/Groups";
import TrackerPage from "./pages/Tracker";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

export const api_path = "http://localhost:5000";
// export const api_path = "";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<AllTransactions />} />
      <Route path="/deposit" element={<DepositForm />} />
      <Route path="/withdrawal" element={<WithdrawalForm />} />
      <Route path="/groups" element={<GroupsManager />} />
      <Route path="/tracker" element={<TrackerPage />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
