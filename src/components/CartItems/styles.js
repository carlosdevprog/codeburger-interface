import styled from "styled-components";

export const Container = styled.div`
background: #ffffff;
border-radius: 20px;
padding: 10px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
width: max-content;
`


export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;

p { 
    font-size: 16px;
    color: #b5b5b5;
}
`


export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
grid-gap: 10px 15px;

img{
    width: 120px;
    border-radius: 10px;
}

p{
    font-size: 16px;    
}

.quantity-container{
    display: flex;
    gap: 20px;
    
    button{
        height: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 24px;
    }

    p{
        margin-top: 6px;
    }
}

`


export const EmptyCart = styled.p`
padding: 10px;
font-weight: 700;
text-align: center;
`




