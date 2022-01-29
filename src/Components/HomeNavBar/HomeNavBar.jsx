import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Cart from "../Cart/Cart";
// import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 25px;
`;
const HomeNavbar = () => {
  var [isCartVisible,setIsCartVisible]=useState(false)
  const history = useHistory();
  function handleClickSignIn() {
    history.push("/authentication");
  }
  function handleClickShop() {
    history.push("/categories");
  }
  
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BRAND BUCKET</Logo>
        </Center>
        <Right>
          <MenuItem onClick={handleClickShop}>SHOP</MenuItem>
          <MenuItem onClick={handleClickSignIn}>REGISTER</MenuItem>
          <MenuItem onClick={handleClickSignIn} >SIGN IN</MenuItem>
          <MenuItem onClick={()=>setIsCartVisible(!isCartVisible)}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
              {isCartVisible ?<Cart/> : null }
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default HomeNavbar;
