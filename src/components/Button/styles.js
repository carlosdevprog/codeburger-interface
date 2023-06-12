import styled from "styled-components";

export const ContainerButton = styled.button`
width: 183px;
height: 36px;
background: #9758a6;
border-radius: 20px;
color: #fff;
border: none;
cursor: pointer;
transition: 0.3s;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;

&:hover{
    opacity: 0.8;
    transition: 0.3s;  
}

&:active{
    opacity: 0.6;    
}

`