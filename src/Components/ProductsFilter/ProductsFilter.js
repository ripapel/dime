import React, { Component } from 'react'
import styled from 'styled-components'

const ProductsFilterContainer = styled.div`
    margin: 0 16px;
`

const StyledProductsFilterForm = styled.form`
    display: flex;

   input{
        padding: 13px 24px;
        border: 2px solid hsl(0, 0%, 90%);
        background-color: hsl(0, 0%, 100%);
        font-size: 16px;
        border-radius: 2px 0px 0px 2px;
        flex: 1;

        &:focus{
            border: 2px solid hsl(0, 2%, 71%);
            outline: none;
        }
   }

   button{
       background-color: #ffc843;
       color: white;
       border: 0;
       font-size: 13px;
       width: 160px;
       padding: 17px 16px 16px;
       margin-left: -2px;

   }

`

export default class ProductsFilter extends Component {
    render() {
        return (
            <ProductsFilterContainer>
                <StyledProductsFilterForm>
                    <input type="text">
                    </input>
                    <button type="button">
                        Search
                    </button>
                </StyledProductsFilterForm>
            </ProductsFilterContainer>
        )
    }
}
