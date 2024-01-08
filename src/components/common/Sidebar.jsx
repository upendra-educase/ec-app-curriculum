import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/DashBoard/Home/Home";
import navigation from "../navigation/navigation";
import Curriculam from "../../pages/DashBoard/Curriculam/Curriculam";
import Schools from "../../pages/DashBoard/Schools/Schools";
import Subscriptions from "../../pages/DashBoard/Subscriptions/Subscriptions";
import { Disc, Circle, X } from "react-feather";
import { Card } from "react-bootstrap";
import demoprofileImage from "../../images/demoprofileimage.svg"
import doubleArrow from "../../images/doubleArrow.svg"
import "./sidebar.css";

const Sidebar = ({ isAsideOpen, setAsideOpen }) => {
  const [state, setState] = useState("Home");
  const [showIcon, setShowIcon] = useState("7");


  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1200);

  useEffect(() => {
    // Function to update the state based on the screen width
    const updateScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 1024);
      if (window.innerWidth < 1200) {
        setAsideOpen(true)
      } else if (window.innerWidth >= 1200) {
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
      <div style={{ position: "relative" }} >
        <Card
          className={`aside-bar ${isAsideOpen ? "hide" : ""} d-flex flex-column`}
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
          <div className=" d-flex flex-column gap end-profile-section-sidebar p-4">
            <div className="d-flex gap profile-container">
              <div className="profile-image-section" >
                <div> <img src={demoprofileImage} /></div>
              </div>
              <div className="d-flex flex-column">
                <span className="profile-name" > Noia Gomez</span>
                <span className="profile-short-name" > noiagomez23</span>
              </div>
            </div>
            <div className="">
              <div className=" d-flex justify-content-between align-items-center status-profile p-4 ">
                <div className="d-flex flex-column">
                  <span className="complete-percentage">80% Completed!</span>
                  <span className="complete-profile-setup" > Complete your profile setup</span>
                </div>
                <div>
                  <div>
                    <img src={doubleArrow}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
