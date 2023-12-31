import styled from "styled-components";

export const Container = styled.div`
height: 60px;
background: #ffffff;
box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;

`


export const ContainerLeft = styled.div`
display: flex;
gap: 40px;
`


export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;


`


export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: ${props => props.isactive === "true" ? '#9758A6' : '#555555'};
font-size: 16px;
line-height: 19px;
font-weight: ${props => props.isactive === "true" ? '700' : '300'};
`

export const ContainerText = styled.div`

  p{
    font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #555555;

}

`


export const LinkExit = styled.a`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
color: #9758a6;
cursor: pointer;
`


export const Line = styled.div`
height: 40px;
border-right: 0.5px solid #bababa;
`



