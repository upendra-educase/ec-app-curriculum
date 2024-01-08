import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/DashBoard/Home/Home";
import navigation from "../navigation/navigation";
import Curriculam from "../../pages/DashBoard/Curriculam/Curriculam";
import Schools from "../../pages/DashBoard/Schools/Schools";
import Subscriptions from "../../pages/DashBoard/Subscriptions/Subscriptions";
import { Disc, Circle, X } from "react-feather";
import { Card } from "react-bootstrap";
import "./sidebar.css";

const Sidebar = ({ isAsideOpen, setAsideOpen }) => {
  const [state, setState] = useState("Home");
  const [showIcon, setShowIcon] = useState("7");

 
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1200);

  useEffect(() => {
    // Function to update the state based on the screen width
    const updateScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 1024);
      if(window.innerWidth < 1200){
        setAsideOpen(true)
      }else if(window.innerWidth>=1200){
        setAsideOpen(false)
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }); // Empty dependency array to run the effect only once when the component mounts


  function handleFunction(element) {
    setState(element);
  }

  // function handleHoverEffect(){
  //  if(isAsideOpen){
  //   setAsideOpen(!isAsideOpen)
  //  }
  //  else if(!isAsideOpen){
  //   setAsideOpen(!isAsideOpen)
  //  }
  // } 

  // const toggleAside = () => {
  //   setAsideOpen(!isAsideOpen);
  // };
 


  return (
    <div className={`aside-bar-container ${!isAsideOpen ? 'margin-right ' : 'margin-right-not'}`} 
    // onMouseEnter={e => handleHoverEffect()} onMouseLeave={e => handleHoverEffect()}
    >
      <div>
        <Card
          className={`aside-bar ${isAsideOpen ? "hide" : ""}`}
          style={{ boxShadow: "0px 4px 18px 0px #0000001A" }}
        >
          <div className="px-4 pt-4 float-end">
            {showIcon === "34" || window.innerWidth < 1200 ? (
              <X color="#4D8EFF" 
              className="float-end"
              onClick={() => setAsideOpen(!isAsideOpen)}
              />
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
            <ul style={{ listStyleType: "none", padding: "0 1rem" }}>
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
