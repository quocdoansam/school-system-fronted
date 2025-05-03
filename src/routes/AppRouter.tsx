import MainLayout from "@/layouts/MainLayout";
import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import HomePage from "@/pages";
import ForgotPage from "@/pages/ForgotPage";
import LoginPage from "@/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path='/login'
        element={
          <NoHeaderLayout>
            <LoginPage />
          </NoHeaderLayout>
        }
      />
      <Route
        path='/forgot'
        element={
          <NoHeaderLayout>
            <ForgotPage />
          </NoHeaderLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
