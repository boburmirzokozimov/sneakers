import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Flex } from "./styles/GlobalStyle";

const Navbar = styled(Flex)`

`

const NavbarList = styled.ul`
    list-style-type: none;
    display: flex;
`

const NavbarItem = styled.li`
  
`

const NavbarLink = styled(NavLink)`
    padding: 20px 10px;
    margin-right: 20px;
    text-decoration: none;
    color:${({ theme }) => theme.colors.black};
    opacity:0.4;
    transition: 0.3s ease ;
    padding-bottom: 38px;

    &:hover{
        color:${({ theme }) => theme.colors.black};
        opacity:1;
    }
    &.active{
        color:${({ theme }) => theme.colors.primaryOrange};
        border-bottom:2px ${({ theme }) => theme.colors.primaryOrange} solid;
        opacity:1;
    }
`

const NavbarContainer = () => {
    return (<>
        <Navbar>
            <NavbarList>
                <NavbarItem>
                    <NavbarLink to='/collections'>Collections</NavbarLink>
                </NavbarItem>

                <NavbarItem>
                    <NavbarLink to='/men'>Men</NavbarLink>
                </NavbarItem>

                <NavbarItem>
                    <NavbarLink to='/women'>Women</NavbarLink>
                </NavbarItem>

                <NavbarItem>
                    <NavbarLink to='/about'>About</NavbarLink>
                </NavbarItem>

                <NavbarItem>
                    <NavbarLink to='/contact'>Contact</NavbarLink>
                </NavbarItem>
            </NavbarList>
        </Navbar>
    </>)
};

export default NavbarContainer;
