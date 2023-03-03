import data from "../services/data"
import styled from "styled-components"
import { Divider, Button } from "@mui/material"

const Card = (props) => {

    const CardMapper = data.map((data, index) => (
        <CardContainer key={index}>
            <Title>{data.name}</Title>
            <Price>{props.isMonthly === false ? data.monthlyPrice : data.annualPrice}</Price>
            {props.isMonthly === false ? null : <Discount>30% OFF</Discount>}
            <Divider style={index === 1 ? {backgroundColor: 'white', color: 'blue'} : null}/>
            <Description>{data.firstDescription}</Description>
            <Divider style={index === 1 ? {backgroundColor: 'white', color: 'blue'} : null}/>
            <Description>{data.secondDescription}</Description>
            <Divider style={index === 1 ? {backgroundColor: 'white', color: 'blue'} : null}/>
            <Description>{data.thirdDescription}</Description>
            <Divider style={index === 1 ? {backgroundColor: 'white', color: 'blue'} : null}/>
            <ButtonContainer>
                <Button variant='contained'  style={index === 1 ? {backgroundColor: 'white', color: 'blue'} : null}>LEARN MORE</Button>
            </ButtonContainer>
        </CardContainer>
    ))

    return(
        <Layout>
            {CardMapper}
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
`

const ButtonContainer = styled.div`
    margin-top: 1.5rem;
`
const Price = styled.div`
    font-size: 3.5rem;
    font-weight: bolder;
    margin-bottom: 1rem;
`

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #504d4d;
`

const Discount = styled.p`
    color: red;
    font-weight: bold;
`

const CardContainer = styled.div`
    background: white;
    border-radius: 10px;
    width: 20rem;
    height: 100%;
    margin-top: 2rem;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    text-align: center;
    box-shadow: 0px 4px 16px 2px rgba(209,209,209,1);
    &:nth-child(2) {
        height: 26rem;
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(144,130,249,1) 0%, rgba(47,87,213,1) 100%);
        color: white;
    }
    &:nth-child(2) ${ButtonContainer} {
        margin-top: 2rem;
    }
    &:nth-child(2) ${Title} {
        margin-top: 1rem;
    }
    &:nth-child(2) ${Description} {
       color: white;
    }
    
    &:nth-child(2) ${Discount}{
        color: orange;
    }
`

export default Card