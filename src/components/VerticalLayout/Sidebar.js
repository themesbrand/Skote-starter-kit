import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";
import SidebarContent from "./SidebarContent";

const Sidebar = (props) => {
   return (
      <React.Fragment>
         <div className="vertical-menu">
            <div data-simplebar className="h-100">
               {props.type !== "condensed" ? (
                  <SidebarContent />
               ) : (
                  <SidebarContent />
               )}
            </div>
         </div>
      </React.Fragment>
   );
};
export default withRouter(Sidebar);
