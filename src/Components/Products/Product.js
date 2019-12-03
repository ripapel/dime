import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProductContainer = styled.div`
    background-color: white;
    box-shadow: hsl(0, 0%, 80%) 0 0 16px;
    display: flex; 
    flex-direction: column;
    margin: 16px;
`

const ProductImgNavigation = styled.button`
    position: absolute;
    top: 50%;
    background: none;
    border: 0;
    cursor: pointer;
    
    &:hover{
        background-color: rgb(84, 84, 84);
    }
`

const ProductImgNavIcon = styled(FontAwesomeIcon)`
    width: 21px !important;
    height: 56px;
    color: hsl(0, 0%, 100%);
    padding: 6px;
`

const ProductImgPrevious = styled(ProductImgNavigation)`
    left: 0;
`

const ProductImgNext = styled(ProductImgNavigation)`
    right: 0;
`

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`

const ProductSection = styled.section`
    position: relative;
`

const ProductDetailsSection = styled(ProductSection)`
    padding: 10px;
`

const ProductName = styled.h3`
    font-size: 15px;
    margin: 0;
`

const ProductPrice = styled.div`
    line-height: 28px;
    color: hsl(0, 0%, 30%);
    font-size: 18px;
    font-weight: 700;
`

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgs: ['https://via.placeholder.com/400',
                'https://via.placeholder.com/400/0000FF/808080',
                'https://via.placeholder.com/400/0000FF/808080?Text=PIC3'],
            activeImg: 0
        }
    }

    goToNextImg = () => {
        const nextImgIndex = this.state.activeImg + 1
        nextImgIndex >= this.state.activeImg ? this.setState({ activeImg: 0 }) : this.setState({ activeImg: nextImgIndex })
    }

    goToPreviousImg = () => {
        const previousImgIndex = this.state.activeImg - 1
        previousImgIndex < 0 ? this.setState({ activeImg: this.state.imgs.length - 1 }) : this.setState({ activeImg: previousImgIndex })
    }

    render() {
        return (
            <ProductContainer>
                <ProductSection>
                    <ProductImg src={this.state.imgs[this.state.activeImg]} alt="" />
                    <ProductImgPrevious onClick={this.goToPreviousImg}>
                        <ProductImgNavIcon icon={faChevronLeft} />
                    </ProductImgPrevious>
                    <ProductImgNext onClick={this.goToNextImg}>
                        <ProductImgNavIcon icon={faChevronRight} />
                    </ProductImgNext>
                </ProductSection>
                <ProductDetailsSection>
                    <ProductName>Lorem ipsum dolores sit amet</ProductName>
                    <ProductPrice>${10.00}</ProductPrice>
                </ProductDetailsSection>
            </ProductContainer>
        )
    }
}
