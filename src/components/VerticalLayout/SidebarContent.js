import React, { useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SidebarContent = (props) => {
   const ref = useRef();

   useEffect(() => {
      const pathName = props.location.pathname;

      const initMenu = () => {
         // new MetisMenu("#side-menu")
         let matchingMenuItem = null;
         // const ul = document.getElementById("side-menu");
         // const items = ul.getElementsByTagName("a");
         // for (let i = 0; i < items.length; ++i) {
         //   if (pathName === items[i].pathname) {
         //     matchingMenuItem = items[i];
         //     break;
         //   }
         // }
         if (matchingMenuItem) {
            activateParentDropdown(matchingMenuItem);
         }
      };
      initMenu();
   }, [props.location.pathname]);

   useEffect(() => {
      ref.current.recalculate();
   });
   function scrollElement(item) {
      if (item) {
         const currentPosition = item.offsetTop;
         if (currentPosition > window.innerHeight) {
            ref.current.getScrollElement().scrollTop = currentPosition - 300;
         }
      }
   }

   function activateParentDropdown(item) {
      item.classList.add("active");
      const parent = item.parentElement;
      const parent2El = parent.childNodes[1];
      if (parent2El && parent2El.id !== "side-menu") {
         parent2El.classList.add("mm-show");
      }

      if (parent) {
         parent.classList.add("mm-active");
         const parent2 = parent.parentElement;

         if (parent2) {
            parent2.classList.add("mm-show"); // ul tag

            const parent3 = parent2.parentElement; // li tag

            if (parent3) {
               parent3.classList.add("mm-active"); // li
               parent3.childNodes[0].classList.add("mm-active"); //a
               const parent4 = parent3.parentElement; // ul
               if (parent4) {
                  parent4.classList.add("mm-show"); // ul
                  const parent5 = parent4.parentElement;
                  if (parent5) {
                     parent5.classList.add("mm-show"); // li
                     parent5.childNodes[0].classList.add("mm-active"); // a tag
                  }
               }
            }
         }
         scrollElement(item);
         return false;
      }
      scrollElement(item);
      return false;
   }

   return (
      <React.Fragment>
         <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
            <div id="sidebar-menu">
               <ul className="metismenu list-unstyled" id="side-menu">
                  <li className="menu-title">Хуудаснууд</li>

                  {/* All permissions allowed pages */}
                  {localStorage.getItem("authRole") === "3" ? (
                     <>
                        <li>
                           <Link to="/chat" className=" waves-effect">
                              <i className="bx bxs-chat"></i>
                              <span>Хэрэглэгчтэй харилцах</span>
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/deposit-withdraw"
                              className=" waves-effect"
                           >
                              <i className="bx bxs-receipt"></i>
                              <span>Орлого Зарлага</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/contacts-list" className=" waves-effect">
                              <i className="bx bxs-user-detail"></i>
                              <span>Хэрэглэгчид</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/table-history" className=" waves-effect">
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Ялагчдын түүх</span>
                           </Link>
                        </li>
                     </>
                  ) : null}

                  {/* Only super admin and admin allowed pages */}
                  {localStorage.getItem("authRole") === "2" ? (
                     <>
                        <li>
                           <Link to="/chat" className=" waves-effect">
                              <i className="bx bxs-chat"></i>
                              <span>Хэрэглэгчтэй харилцах</span>
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/deposit-withdraw"
                              className=" waves-effect"
                           >
                              <i className="bx bxs-receipt"></i>
                              <span>Орлого Зарлага</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/contacts-list" className=" waves-effect">
                              <i className="bx bxs-user-detail"></i>
                              <span>Хэрэглэгчид</span>
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/room-configuration"
                              className=" waves-effect"
                           >
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Өрөөний тохиргоо</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/table-history" className=" waves-effect">
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Ялагчдын түүх</span>
                           </Link>
                        </li>
                     </>
                  ) : null}
                  {/* Only super admin allowed pages */}
                  {localStorage.getItem("authRole") === "1" ? (
                     <>
                        <li>
                           <Link to="/dashboard" className=" waves-effect">
                              <i className="bx bxs-user-detail"></i>
                              <span>Хяналтын самбар</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/rooms-grid" className=" waves-effect">
                              <i className="bx bxs-user-detail"></i>
                              <span>Өрөө</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/chat" className=" waves-effect">
                              <i className="bx bxs-chat"></i>
                              <span>Хэрэглэгчтэй харилцах</span>
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/deposit-withdraw"
                              className=" waves-effect"
                           >
                              <i className="bx bxs-receipt"></i>
                              <span>Орлого Зарлага</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/contacts-list" className=" waves-effect">
                              <i className="bx bxs-user-detail"></i>
                              <span>Хэрэглэгчид</span>
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/room-configuration"
                              className=" waves-effect"
                           >
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Өрөөний тохиргоо</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/manage-admins" className=" waves-effect">
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Админы удирдлага</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/table-history" className=" waves-effect">
                              <i className="bx bx-grid-horizontal"></i>
                              <span>Ялагчдын түүх</span>
                           </Link>
                        </li>
                     </>
                  ) : null}
               </ul>
            </div>
         </SimpleBar>
      </React.Fragment>
   );
};
export default withRouter(SidebarContent);
