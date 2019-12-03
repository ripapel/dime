import React from 'react'
import styled from 'styled-components'

import './App.css'
import Product from './Components/Products/Product'
import Header from './Components/Header/Header'
import ProductsFilter from './Components/ProductsFilter/ProductsFilter'


const ProductsGrid = styled.div`
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`
const AppInner = styled.div`
  margin: 50px;
`

const AppContainer = styled.div`
`

function App() {
  return (
    <AppContainer>
      <Header />
      <AppInner>
        <ProductsFilter />
        <ProductsGrid>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductsGrid>
      </AppInner>
    </AppContainer>
  );
}

export default App
