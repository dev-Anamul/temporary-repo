import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/protect-routes/PrivateRoute";
import PublicRoutes from "./components/protect-routes/PublicRoutes";
import { useGetSettingsQuery } from "./features/settings/setting-api";
import useAuthCheck from "./hooks/useAuthCheck";
import useSetFavIcon from "./hooks/useSetFavIcon";
import useSetTitle from "./hooks/useSetTitle";
import AddCategory from "./pages/add-category/AddCategory";
import AddNotificationChannel from "./pages/add-channel/AddNotificationChannel";
import AddExpense from "./pages/add-expense/AddExpense";
import AddIncomeSource from "./pages/add-income-source/AddIncomeSource";
import AddUser from "./pages/add-user/AddUser";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import Users from "./pages/all-users/Users";
import CategoryList from "./pages/category-list/CategoryList";
import Chat from "./pages/chat/chat";
import Dashboard from "./pages/dashboard/dashboard";
import DepreciationList from "./pages/depreciation-list/DepreciationList";
import ExpenseList from "./pages/expense-list/ExpenseList";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import IncomeSources from "./pages/income-sources/IncomeSources";
import IncomeTypeList from "./pages/income-type-list/IncomeTypeList";
import Login from "./pages/login/login";
import MainPage from "./pages/main-page/main";
import NotFound from "./pages/not-found/NotFound";
import Channel from "./pages/notification-channel/Channel";
import NotificationChannel from "./pages/notification-channel/NotificationChannel";
import Notification from "./pages/notification/Notification";
import Notifications from "./pages/notification/Notifications";
import OCRExpenses from "./pages/ocr-expenses/OCRExpenses";
import Profile from "./pages/profile/Profile";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Settings from "./pages/settings/Settings";

function App() {
  const isAuthChecked = useAuthCheck();
  const setTitle = useSetTitle();
  const setFavIcon = useSetFavIcon();

  const { data: setting, isSuccess, status } = useGetSettingsQuery();

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      setTitle(setting?.data?.title);
      setFavIcon(setting?.data?.fevIcon);
    }
  }, [setting, isSuccess, status, setTitle, setFavIcon]);

  return (
    <div id="app-div">
      {!isAuthChecked ? (
        <div className="flex h-screen justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoutes>
                <ForgotPassword />
              </PublicRoutes>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoutes>
                <ResetPassword />
              </PublicRoutes>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          >
            {/* DASHBOARD */}
            <Route index element={<Dashboard />} />

            {/* USER */}
            <Route path="users" element={<Users />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="user-profile/:id" element={<Profile />} />
            <Route path="admin-profile" element={<AdminProfile />} />

            {/* INCOME SOURCE */}
            <Route path="income-sources" element={<IncomeSources />} />
            <Route path="add-income-source" element={<AddIncomeSource />} />

            {/* EXPENSE */}
            <Route path="expense-list" element={<ExpenseList />} />
            <Route path="add-expense" element={<AddExpense />} />

            {/* CATEGORY */}
            <Route path="category-list" element={<CategoryList />} />
            <Route path="add-category" element={<AddCategory />} />

            {/* INCOME TYPE */}
            <Route path="income-type-list" element={<IncomeTypeList />} />
            {/* <Route path="add-category" element={<AddCategory />} /> */}

            {/* OCR EXPENSE */}
            <Route path="ocr-expense" element={<OCRExpenses />} />

            {/* NOTIFICATION */}
            <Route path="notifications" element={<Notifications />}>
              <Route path=":id" element={<Notification />} />
            </Route>

            {/* NOTIFICATION CHANNEL */}
            <Route
              path="notification-channel"
              element={<NotificationChannel />}
            >
              <Route path="channel/:id" element={<Channel />} />
            </Route>
            <Route path="add-channel" element={<AddNotificationChannel />} />

            {/* SETTINGS */}
            <Route path="settings" element={<Settings />} />

            {/* DEPRECIATION */}
            <Route path="depreciation/:id" element={<DepreciationList />} />

            {/* SETTINGS */}
            <Route path="chat" element={<Chat />} />

            {/* NOT FOUND */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
