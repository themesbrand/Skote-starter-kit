import { Switch, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Authmiddleware from "./routes/middleware/AuthMiddleware";
import NonAuthLayout from "./components/NonAuthLayout";
import VerticalLayout from "./components/VerticalLayout/";

import { authRoutes, nonAuthRoutes, blogRoutes } from "./routes/allRoutes";

// import GlobalContext from "./Context";

// Import scss
import "./assets/scss/theme.scss";

const App = () => {
	return (
		// <React.Fragment>
		<Router>
			<Switch>
				{authRoutes.map((route, idx) => (
					<Authmiddleware
						path={route.path}
						layout={VerticalLayout}
						component={route.component}
						key={idx}
						isAuthProtected={true}
					/>
				))}

				{nonAuthRoutes.map((route, idx) => (
					<Authmiddleware
						path={route.path}
						layout={NonAuthLayout}
						component={route.component}
						key={idx}
						isAuthProtected={false}
						exact
					/>
				))}
				{blogRoutes.map((route, idx) => (
					<Authmiddleware
						path={route.path}
						layout={NonAuthLayout}
						component={route.component}
						key={idx}
						isAuthProtected={false}
					/>
				))}
			</Switch>
		</Router>
		// </React.Fragment>
	);
};

export default App;
