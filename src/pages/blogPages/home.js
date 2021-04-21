import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import axios from "axios";
require("dotenv").config();
const Home = (props) => {
	return (
		<React.Fragment>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
			/>
			<div className="page-content">
				<Container fluid>
					<h1>Home</h1>
				</Container>
			</div>
		</React.Fragment>
	);
};

export default Home;
