import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import DatePicker from "react-datepicker";

import axios from "axios";
require("dotenv").config();
const Dashboard = (props) => {
 
   return (
      <React.Fragment>
         <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
         />
         <div className="page-content">
            <Container fluid>
              <h1>Dashboard</h1>
            </Container>
         </div>
      </React.Fragment>
   );
};

export default Dashboard;
