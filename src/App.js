import React from 'react'
import './App.css'
import Product from './Components/Products/Product'
import styled from 'styled-components'

const ProductsGrid = styled.div`
   display: grid;
  /*grid-template-columns: 25% 25% 25%; */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

const AppContainer = styled.div`
  margin: 50px;
`

function App() {
  return (
    <AppContainer>
      <ProductsGrid>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsGrid>
    </AppContainer>
  );
}

export default App
