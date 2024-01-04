import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/DashBoard/Home/Home";
import navigation from "../navigation/navigation";
import Curriculam from "../../pages/DashBoard/Curriculam/Curriculam";
import Schools from "../../pages/DashBoard/Schools/Schools";
import Subscriptions from "../../pages/DashBoard/Subscriptions/Subscriptions";
import { Disc, Circle, X } from "react-feather";
import { Card } from "react-bootstrap";
import "./sidebar.css";

const Sidebar = () => {
  const [isAsideOpen, setAsideOpen] = useState(true);
  const [state, setState] = useState("Home");
  const [showIcon, setShowIcon] = useState("7");

  function handleFunction(element) {
    setState(element);
  }

  // const toggleAside = () => {
  //   setAsideOpen(!isAsideOpen);
  // };

  return (
    // <aside className='h-screen'>
    //   <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
    //     <div className='p-4 pb-2 flex justify-between items-center'>
    //       <div className='text-2xl font-bold'>Logo of the side bar </div>
    //     </div>
    //   </nav>
    // </aside>

    <div className="aside-bar-container">
      <div>
        <Card
          className={`aside-bar ${isAsideOpen ? "open" : ""}`}
          style={{ boxShadow: "0px 4px 18px 0px #0000001A" }}
        >
          <div className="px-4 pt-4 float-end">
            {showIcon === "34" ? (
              <X color="#4D8EFF" />
            ) : showIcon === "33" ? (
              <Circle color="#4D8EFF" />
            ) : (
              <Disc className="float-end" color="#4D8EFF" />
            )}
          </div>
          <div className="content">
            <ul style={{ listStyleType: "none", padding: "0 2rem" }}>
              <div className="menu-title">Main Menu</div>
              {navigation.map((element, ind) => {
                return (
                  <li
                    className={`${ind === 0 ? "mt-4" : ""} sideBarList`}
                    style={{
                      backgroundColor:
                        state === element.title ? " #4D8EFF" : "",
                      borderRadius: "10px",
                      padding: "0.2rem",
                    }}
                  >
                    <NavLink
                      to={element.navLink}
                      style={{
                        textDecoration: "none",
                        flex: 1,
                        borderRadius: "12px",
                      }}
                      className={"d-flex align-item-center gap p-2"}
                      onClick={(e) => handleFunction(element.title)}
                    >
                      <div style={{ marginRight: "0.5rem" }}>
                        {React.cloneElement(element.icon, {
                          style: {
                            ...element.icon.props.style,
                            fill:
                              state === element.title ? "#ffffff" : "#000000",
                          },
                        })}
                      </div>
                      <div
                        style={{
                          color:
                            state === element.title ? " #ffffff" : "#838383",
                          fontWeight: state === element.title ? "800" : "",
                        }}
                      >
                        {element.title}
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      </div>

      {/* <div style={{ flex: 1, marginLeft: !isAsideOpen ? "200px" : "400px" }}>
        <Routes>
          <Route exact path="/modules/home" element={<Home />} />
          <Route exact path="/modules/curriculam" element={<Curriculam />} />
          <Route exact path="/modules/schools" element={<Schools />} />
          <Route
            exact
            path="/modules/subscriptions"
            element={<Subscriptions />}
          />
        </Routes>
      </div> */}
    </div>
  );
};

export default Sidebar;
