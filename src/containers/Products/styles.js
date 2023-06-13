import styled from "styled-components";

export const Container = styled.div`
background: #E5E5E5;
min-height: 100vh;
`


export const ProductsImg = styled.img`
width: 100%;
`

export const CategoriesMenu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin-top: 20px;
`


export const CategoryButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.isactivecategories === "true" ? "#9758A6" : "#9A9A9D"};
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isactivecategories === "true" && "2px solid #9758A6"};
  padding-bottom: 5px;
  transition: 0.1s;
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 40px;
margin-top: 20px;
justify-items: center;
`