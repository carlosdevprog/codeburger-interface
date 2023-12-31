import React, { useEffect, useState } from "react";
import ProductsLogo from "../../assets/logo-products.svg"
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from "./styles"
import api from "../../services/api"
import { CardProduct } from "../../components";
import formatCurrency from "../../utils/formatCurrency";

import { useLocation } from 'react-router-dom';


export function Products() {    
   
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)
    const { state } = useLocation()
    
    useEffect(() => {
        if (state?.categoryId) {
            setActiveCategories(state.categoryId)
        }
    }, [state?.categoryId])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get("categories")

            const newCategories = [{ id: 0, name: "Tudo" }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get("products")

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()

    }, [])

    useEffect(() => {
      if(activeCategories === 0){
        setFilterProducts(products)
      }else{
        const newFilterProducts = products.filter(product => product.category_id === activeCategories)
        setFilterProducts(newFilterProducts)
      }
    
    }, [activeCategories, products])   



    return (
        <Container>

            <ProductsImg src={ProductsLogo} alt="products-logo" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        
                        <CategoryButton                                
                            type="button"
                            key={category.id}
                            isactivecategories={String(activeCategories === category.id)}
                            onClick={() => {
                                setActiveCategories(category.id)
                            }}>
                            {category.name}
                        </CategoryButton>
                        
                    ))}
            </CategoriesMenu>

            <ProductsContainer>
                {filterProducts &&
                    filterProducts.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
            </ProductsContainer>

        </Container>

    )
}





