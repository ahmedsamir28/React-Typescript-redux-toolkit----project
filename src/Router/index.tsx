import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../Pages/Layout";
import ErrorHandler from "../Components/errors/ErrorHandler";
import HomePage from "../Pages/HomePage";
import PageNotFound from "../Pages/PageNotFound";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import LoginPage from "../Pages/LoginPage";
import PageDetails from "../Pages/PageDetails";
// import ProtectedRoute from "../components/auth/ProtectedRoute";
// import ErrorHandler from "../components/errors/ErrorHandler";
// import HomePage from "../pages";
// import AboutPage from "../pages/About";
// import ContactPage from "../pages/Contact";
// import ContributePage from "../pages/Contribute";
// import RootLayout from "../pages/Layout";
// import LoginPage from "../pages/Login";
// import PageNotFound from "../pages/PageNotFound";
// import QuickStartPage from "../pages/learn";
// import InstallationPage from "../pages/learn/Installation";
// import LearnLayout from "../pages/learn/Layout";
// import ThinkingInReactPage from "../pages/learn/ThinkingInReact";

// const isLoggedIn = false;
// const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="food/:id" element={<PageDetails/>} />
        {/* <Route path="about" element={<AboutPage />} /> */}

        {/* <Route
          path="contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <ContributePage />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="" data={userData}>
              <LoginPage/>
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="login"
          element={<LoginPage/>}
        />
      </Route>

      {/* Learn Layout */}
      {/* <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route> */}

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound/>} />
    </>
  )
);

export default router;
