import React, { useEffect, useRef } from "react";

import NavbarContainer from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../features/ProductPrice";

import {
    Navbar,
    InnerContainer,
    InnerLeftContainer,
    Logo,
    InnerRightContainer,
    ShoppingCartContainer,
    CartCounter,
    AvatarContainer,
    InvisibleCart,
    Purchases
} from './Header.style'

export const Header = () => {
    const openRef = useRef()

    const isActive = useSelector(state => state.price.active)
    const counter = useSelector(state => state.price.totalItems)
    const price = useSelector(state => state.price.totalValue)
    const dispatch = useDispatch()

    const popUpHandler = () => {
        if (!event.path.includes(openRef.current)) {
            console.log('clicked');
            dispatch(setActive(false))
        };
    }

    useEffect(() => {
        document.body.addEventListener('click', popUpHandler)
        return () => {
            document.body.removeEventListener('click', popUpHandler)
        }
    }, [])

    return <Navbar>
        <InnerContainer>
            <InnerLeftContainer>
                <Logo>sneakers</Logo>
                <NavbarContainer />
            </InnerLeftContainer>
            <InnerRightContainer>
                <ShoppingCartContainer ref={openRef} onClick={() => dispatch(setActive(true))}>
                    <CartCounter>{counter}</CartCounter>
                </ShoppingCartContainer>
                <AvatarContainer />
                <InvisibleCart isActive={isActive}>
                    <h3>Cart</h3>
                    <hr />
                    <Purchases>
                        <h4>You have selected {counter} items</h4>
                        <p> Price: ${price}</p>
                    </Purchases>
                </InvisibleCart>
            </InnerRightContainer>
        </InnerContainer>
    </Navbar>
};

export default Header;
