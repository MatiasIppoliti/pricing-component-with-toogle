
import styled from "styled-components"
import { useState } from "react"
import ToggleButton from "./Toggle"
import Card from "./Card"

const Pricing = () => {
    
    const [time, setTime] = useState(false)
    
    return(
        <Layout>
            <h1>Our Pricing</h1>
            <ToggleButton onChange={() => setTime(!time)}/>
            <Card isMonthly={time}/>
        </Layout>
    )
}

const Layout = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(157,174,228,1) 100%);
`

export default Pricing
