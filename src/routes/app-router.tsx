import MainLayout from "@/layouts/main-layout";
import NoHeaderLayout from "@/layouts/no-header-layout";
import HomePage from "@/pages";
import ForgotPage from "@/pages/forgot";
import LoginPage from "@/pages/login";
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
