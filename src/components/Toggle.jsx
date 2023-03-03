import styled from "styled-components"
import { Switch } from "@mui/material"

const ToggleButton = ({onChange}) => {
    return (
        <ToggleContainer>
            <p>Monthly</p>
            <Switch onChange={onChange}/>
            <p>Annual</p>
        </ToggleContainer>
    )
}

 const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
 `

export default ToggleButton