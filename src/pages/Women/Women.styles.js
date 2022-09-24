import styled from 'styled-components'
import { Container } from '../../components/styles/GlobalStyle'

const ImageContainer = styled(Container)`
display: flex;
`

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
margin-right: 40px;
`

const MainImageContainer = styled.div`
margin-bottom: 30px;
`

const MainImage = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
border-radius: 10px;
`


const OtherImageContainer = styled.div`
display: flex;
`

const OtherImages = styled(MainImage)`
height: 100px;
width: 100px;
margin-right: 20px;
object-fit: cover;
object-position: center;
border-radius: 10px;
cursor:pointer;
${props => props.border === 'active'
        && `
  opacity:0.7;
  `
    }
${props => props.border === 'active'
        && `
  border:2px var(--primary-orange) solid;
  `
    }
`

const RightContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
& > p {
  opacity:0.4;
}
& > span {
  text-decoration: line-through;
  margin-top: -40px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.greyishBlue}
}
`

const Title = styled.h1`
 font-weight: ${({ theme }) => theme.fonts.weight.bold} ;
 font-size: 40px;
`

const SubTitle = styled.h2`
letter-spacing: 1px;
font-size: ${({ theme }) => theme.fonts.size.small} ;
color: ${({ theme }) => theme.colors.primaryOrange};
text-transform: uppercase;
`

const ActionContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Counter = styled.div`
flex:1;
background-color: ${({ theme }) => theme.colors.lightGreyishBlue};
display: flex;
padding: 20px;
margin-right: 10px;
border-radius:20px;
justify-content: space-between;
& > span {
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primaryOrange};
  cursor:pointer;
}
`

const Button = styled.button`
display: flex;
flex:2;
align-items: center;
justify-content: center;
padding: 20px;
border-radius:20px;
font-size: 16px;
border-style: none;
cursor:pointer;
background-color: ${({ theme }) => theme.colors.primaryOrange};
color: ${({ theme }) => theme.colors.white};
& > span {
  margin-right: 10px;
}
`

const CostContainer = styled.div`
display: flex;
`

const Cost = styled.span`
margin-right: 20px;
font-size: 30px;
font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

const Discount = styled.span`
display: flex;
font-weight: ${({ theme }) => theme.fonts.weight.bold};
justify-content: center;
align-items: center;
padding: 0 5px;
border-radius:10px;
background-color: ${({ theme }) => theme.colors.primaryPaleOrange};
color:${({ theme }) => theme.colors.primaryOrange};
`

export {
    Button,
    Counter,
    ActionContainer,
    Discount,
    Cost,
    CostContainer,
    Title,
    SubTitle,
    RightContainer,
    OtherImageContainer,
    OtherImages,
    MainImage,
    MainImageContainer,
    LeftContainer,
    ImageContainer
}
