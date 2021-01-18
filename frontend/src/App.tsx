import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import logo from "./img/react.svg";
import { gql, useQuery } from '@apollo/client'


const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  background-color: #FFFFFF;
  color: #000000;
`;

const Logo = styled.img`
  width: 120px;
  padding-top: 15px;
  padding-left: 15px;
`;

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 670px;
`;

const Heading = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  padding-top: 60px;
`;

const Title = styled.div`
  font-family: 'Karla', sans-serif;
  font-size: 50px;
  font-weight: bolder;
  height: 45px;
  padding-bottom: 10px;
`;

const Subheading = styled.div`
  font-family: 'Karla', sans-serif;
  font-size: 25px;
  font-weight: 500;
  height: 45px;
  padding-top: 10px;
`;

const Button = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  padding-top: 70px;
`;

const Status = styled.button`
  background-color: #7551DF;
  height: 60px;
  border: none;
  color: white;
  border-top-left-radius: calc(16px);
  border-top-right-radius: calc(16px);
  border-bottom-right-radius: calc(16px);
  border-bottom-left-radius: calc(16px);
  width: 200px;
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  font-weight: 900;
`;

const GET_STATUS = gql`
  query {
    status
  }
`

function App(): JSX.Element {

  let { loading, error, data } = useQuery(GET_STATUS)
  const [status, setStatus] = useState([])

  useEffect(() => {
    if (loading) console.log("Loading...")
    if (error) console.log("Error!")
    if (data) setStatus(data.status)
  }, [loading, error, data])

  return (
    <Main>
      <Logo src={logo} alt="clicon" />
      <Body>
        <Heading>
          <Title>It Works!</Title>
          <Subheading>Well Done</Subheading>
        </Heading>
        <Button>
          <Status>{status}</Status>
        </Button>
      </Body>
    </Main>
  );
}

export default App;
