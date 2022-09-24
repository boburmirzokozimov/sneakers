import styled from "styled-components";

import { cart, avatar } from '../../assets/index'
import { Link } from "react-router-dom";

const Navbar = styled.header`
height: 100px;
display: flex;
align-items:center;
`
const InnerContainer = styled.div`
width: 1080px;
margin: 0 auto;
border-bottom:1px var(--grayish-blue) solid;
padding: 20px;
padding-left:0;
display: flex;
`

const InnerLeftContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex:50%;
margin-bottom: 10px;
`

const Logo = styled(Link).attrs({
    to: '/'
})`
font-weight:var(--fw-bold);
font-size: 30px;
text-decoration: none;
color:var(--black);
margin-right: 20px;
`


const InnerRightContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
align-content: center;
flex:50%;
position: relative;
`


const ShoppingCartContainer = styled.div`
cursor: pointer;
width: 32px;
height: 32px;
margin-right: 20px;
position: relative;
object-fit: contain;
background-position: center center;
background-image: url(${cart});
background-repeat:no-repeat;
`

const CartCounter = styled.span`
position: absolute;
right: -3px;
padding:2px 8px;
border-radius: 40%;
background-color: var(--primary-orange);
color: var(--white);
font-size: 8px;
`

const AvatarContainer = styled.div`
cursor: pointer;
height: 42px;
width: 42px;
border: 2px var(--primary-orange) solid;
border-radius: 50%;
background-size: contain; 
background-position: center center;
background-image: url(${avatar}) ;
background-repeat:no-repeat;
`

const InvisibleCart = styled.div`
display : ${props => props.isActive === true ? 'block' : 'none'};
position: absolute;
z-index: 50;
padding: 20px;
top:100%;
max-height: 200px;
width: 300px;
border-radius: 10px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 5px 5px 10px 1px #949292ea;
& > h3 {
    padding: 0 5px 10px 0;
}

`
const Purchases = styled.div`
& > h4 {
opacity: 0.6;
}
& > p {
opacity:0.4;
}
`

export {
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
}