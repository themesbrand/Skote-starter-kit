import Dashboard from "../pages/adminPages/Dashboard";
import Login from "../pages/adminPages/Authentication/Login";
import Home from "../pages/blogPages/home";

const nonAuthRoutes = [{ path: "/login", component: Login }];

const authRoutes = [
	// { path: "/chat", component: Chat },
	{ path: "/dashboard", component: Dashboard },
	// { path: "/rooms-grid", component: RoomsGrid },
	// { path: "/manage-admins", component: ManageAdmins },
];

const blogRoutes = [{ path: "/", component: Home }];

export { authRoutes, nonAuthRoutes, blogRoutes };
