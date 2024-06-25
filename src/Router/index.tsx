import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../Pages/Layout";
import ErrorHandler from "../Components/errors/ErrorHandler";
import HomePage from "../Pages/HomePage";
import PageNotFound from "../Pages/PageNotFound";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import LoginPage from "../Pages/LoginPage";
import PageDetails from "../Pages/PageDetails";
import CartPage from "../Pages/CartPage";
import RegisterPage from "../Pages/RegisterPage";
import ProductsDashBoard from "../Pages/DashBoard/ProductsDashBoard";
import AddProduct from "../Pages/DashBoard/AddProduct";
import AddCategory from "../Pages/DashBoard/AddCategory";

const storageKey = "user";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <HomePage />
          </ProtectedRoute>
        }
        />

        <Route path="food/:id" element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <PageDetails />
          </ProtectedRoute>

        } />

        <Route path="cart" element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <CartPage />
          </ProtectedRoute>
        } />

        <Route path="dashboard" element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <ProductsDashBoard />
          </ProtectedRoute>
        } />

        <Route path="add-product" element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <AddProduct />
          </ProtectedRoute>
        } />

        <Route path="add-category" element={
          <ProtectedRoute
            isAllowed={userData?.jwt}
            redirectPath="/login"
            data={userData}
          >
            <AddCategory />
          </ProtectedRoute>
        } />

        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!userData?.jwt}
              redirectPath="/"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="register"
          element={
            <ProtectedRoute
              isAllowed={!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <RegisterPage />
            </ProtectedRoute>
          }
        />

      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
