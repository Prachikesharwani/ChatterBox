import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
// import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchUserName = async () => {
      const dataString = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data && data.userName) {
          setUserName(data.userName);
        }
      }
    };

    fetchUserName();
  }, []);
  return (
    <Container>
      {/* <Logout/> */}
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
