import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top{
    display: flex;
    flex-direction: column;  
  }
  
  div{
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  h2{
    margin-bottom: 20px;
  }

  .container-bottom{
    
    p{
        font-weight: 700;
        font-size: 22px;
        margin-top: 20px;
    }
  }

  
`




