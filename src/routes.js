import { lazy } from "react";
import { v4 as uuid } from "uuid";

const LoginPage = lazy(() => {
  return import("./pages/loginPage/LoginPage");
});

const RegisterPage = lazy(() => import("./pages/registerPage/RegisterPage"));

const ContactsPage = lazy(() => import("./pages/contactsPage/ContactsPage"));

const routes = [
  {
    id: uuid(),
    component: LoginPage,
    path: "/login",
    exact: true,
    private: false,
    restricted: false,
  },
  {
    id: uuid(),
    component: RegisterPage,
    path: "/signup",
    exact: true,
    private: false,
    restricted: true,
  },
  {
    id: uuid(),
    component: ContactsPage,
    path: "/contacts",
    exact: true,
    private: true,
    restricted: false,
  },
];

export default routes;
