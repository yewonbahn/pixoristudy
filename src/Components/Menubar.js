import React from "react";
import {Link,withRouter} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;


    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    
    background-color: rgba(155, 91, 166, 0.43);
    padding : 0px 10px;

    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);

`;
const List = styled.ul`
  display: flex;`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid 
  ${props => props.current ? "#3498db":"transparent"};
  transition:border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default withRouter(({location:{pathname}})=>(
    <Header>
    <List>
    <Item current={pathname === "/"}><SLink to="/">Movies</SLink></Item>
    <Item current={pathname === "/maker"}><SLink to="/maker">Maker</SLink></Item>
    <Item current={pathname === "/search"}><SLink to="/search">Search</SLink></Item>
    
    </List>
    </Header>));

