import styled from "styled-components"
import ReactSelect from "react-select"

export const Container = styled.div`
background: #EFEFEF;
min-height: 100vh;

`
export const ProductsImg = styled.img`
width: 60px;
border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
width: 250px;

.css-1s2u09g-control {
    cursor: pointer;
}
`

export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin: 20px 0;
`

export const LinkMenu = styled.a`
color: #32325D;
cursor: pointer;
font-weight: ${props => props.isactivestatus === 'true' ? 'bold' : '400'};
border-bottom: ${props => props.isactivestatus === 'true' && '2px solid #9758A6'};
padding-bottom: 5px;
`


