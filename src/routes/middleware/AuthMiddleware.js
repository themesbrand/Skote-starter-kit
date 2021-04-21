import React from "react";
import { Route, Redirect } from "react-router-dom";

const Authmiddleware = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthProtected) {
					if (localStorage.getItem("isAuthenticated")) {
						return (
							<Layout>
								<Component {...props} />
							</Layout>
						);
					} else {
						return (
							<Redirect
								to={{
									pathname: "/",
								}}
							/>
						);
					}
				}
				return (
					<Layout>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	);
};

export default Authmiddleware;
