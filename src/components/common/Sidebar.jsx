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

const Sidebar = ({isAsideOpen, setAsideOpen}) => {
  const [state, setState] = useState("Home");
  const [showIcon, setShowIcon] = useState("7");

  function handleFunction(element) {
    setState(element);
  }

  // const toggleAside = () => {
  //   setAsideOpen(!isAsideOpen);
  // };

  return (
    <div className="aside-bar-container">
      <div>
        <Card
          className={`aside-bar ${isAsideOpen ? "hide" : ""}`}
          style={{ boxShadow: "0px 4px 18px 0px #0000001A" }}
        >
          <div className="px-4 pt-4 float-end">
            {showIcon === "34" ? (
              <X color="#4D8EFF" />
            ) : isAsideOpen ? (
              <Circle
                className="float-end"
                color="#4D8EFF"
                onClick={() => setAsideOpen(!isAsideOpen)}
              />
            ) : (
              <Disc
                className="float-end"
                color="#4D8EFF"
                onClick={() => setAsideOpen(!isAsideOpen)}
              />
            )}
          </div>
          <div className="content">
            <ul style={{ listStyleType: "none", padding: "0 2rem" }}>
              <div className="menu-title">
                {!isAsideOpen ? "Main Menu" : "..."}
              </div>
              {navigation.map((element, ind) => {
                return (
                  <li
                    className={`${ind === 0 ? "mt-4" : ""} sideBarList`}
                    style={{
                      minWidth: "2.6rem",
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
                        {!isAsideOpen && element.title}
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
