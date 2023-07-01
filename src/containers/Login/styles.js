import styled from "styled-components";
import Background from "../../assets/background.svg"

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url(${Background});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

export const LoginImage = styled.img`
height: 70%;
`

export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
}

form{
    display: flex;
    flex-direction: column;
}

`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #fff;
margin: 28px 0 5px 0;
`

export const Input = styled.input`
width: 390px;
height: 38px;
background: #fff;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
font-size: 18px;
padding-left: 10px;
border: ${ props => (props.error ? "2px solid #CC1717" : "none")};
`

export const SignUpLink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #fff;

a{
    text-decoration: underline;
    color: #fff;
    cursor: pointer;
    
    &:hover{
    color: #B8C124;
    transition: 0.5s;
}

}
`

export const ErrorMessage = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #cc1717;
margin-top: 2px;
`


