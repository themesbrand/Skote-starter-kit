import React, { useContext, useState } from "react";

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";

import { withRouter, Link, useHistory } from "react-router-dom";

import axios from "axios";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// Global context
// import GlobalContext from "../../Context";

// import images
import profile from "../../../assets/images/profile-img.png";
import logo from "../../../assets/images/logo.png";

const Login = (props) => {
	const history = useHistory();
	const [errorMessage, setErrorMessage] = useState("");

	const redirectTo = (role) => {
		history.push("/dashboard");
	};

	const login = (e, v) => {
		setAuthenticated();
		setSessionPeriod();
		redirectTo(1);
		// axios
		//    .post("http://127.0.0.1:8000/auth/admin/login", {
		//       username: v.username,
		//       password: v.password,
		//    })
		//    .then((res) => {
		//       console.log(res.data);
		//       setSessionPeriod();
		//       setAuthenticated(res.data);
		//       redirectTo(res.data.data.role);
		//    })
		//    .catch((error) => {
		//       if (error.response) {
		//          if (error.response.status) {
		//             setErrorMessage("Нэвтрэх нэр эсвэл нууц үг буруу");
		//          } else {
		//             alert("Server error");
		//          }
		//       }
		//    });
	};

	// Set authenticated status
	const setAuthenticated = (obj) => {
		localStorage.setItem("isAuthenticated", true);
		// localStorage.setItem("authFullname", obj.data.fullname);
		// localStorage.setItem("authToken", obj.token);
		// localStorage.setItem("isAuthenticated", true);
		// localStorage.setItem("authRole", obj.data.role);
		// localStorage.setItem("authID", obj.data.id);
	};

	// Set session delete period after 1 day

	const setSessionPeriod = () => {
		var a = new Date();
		a.setDate(a.getDate() + 1);

		localStorage.setItem(
			"deleteAt",
			a.toLocaleString("mn-MN", { timeZone: "Asia/Ulaanbaatar" })
		);
	};

	return (
		<React.Fragment>
			<div className="home-btn d-none d-sm-block">
				<Link to="/" className="text-dark">
					<i className="fas fa-home h2" />
				</Link>
			</div>
			<div className="account-pages my-5 pt-sm-5">
				<Container>
					<Row className="justify-content-center">
						<Col md={8} lg={6} xl={5}>
							<Card className="overflow-hidden">
								<div className="bg-soft-primary">
									<Row>
										<Col className="col-7">
											<div className="text-primary p-4">
												<h5 className="text-primary">Тавтай морил!</h5>
												<p>Удирдлагын систем</p>
											</div>
										</Col>
										<Col className="col-5 align-self-end">
											<img src={profile} alt="" className="img-fluid" />
										</Col>
									</Row>
								</div>
								<CardBody className="pt-0">
									<div>
										<Link to="/">
											<div className="avatar-md profile-user-wid mb-4">
												<span className="avatar-title rounded-circle bg-light">
													<img
														src={logo}
														alt=""
														className="rounded-circle"
														height="100"
													/>
												</span>
											</div>
										</Link>
									</div>
									<div className="p-2">
										<AvForm
											className="form-horizontal"
											onValidSubmit={(e, v) => {
												login(e, v);
												// handleValidSubmit(e, v);
											}}
										>
											<div className="form-group">
												<AvField
													name="username"
													label="Хэрэглэгчийн нэр"
													className="form-control"
													placeholder="Нэвтрэх нэр оруулна уу..."
													type="text"
													required
												/>
											</div>

											<div className="form-group">
												<AvField
													name="password"
													label="Нууц үг"
													type="password"
													required
													placeholder="Нууц үг оруулна уу..."
												/>
											</div>
											<div>
												<h6 style={{ color: "#e04c53" }}>{errorMessage}</h6>
											</div>
											{/* <div className="custom-control custom-checkbox">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customControlInline"
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customControlInline"
                                    >
                                       Сануулах
                                    </label>
                                 </div> */}
											<div className="mt-3">
												<button
													className="btn btn-primary btn-block waves-effect waves-light"
													type="submit"
													onClick={(e) => {}}
												>
													Нэвтрэх
												</button>
											</div>
										</AvForm>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	);
};
export default withRouter(Login);
