import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProductContainer = styled.div`
    background-color: white;
    box-shadow: hsl(0, 0%, 80%) 0 0 16px;
    display: flex; 
    flex-direction: column;
    margin: 10px;
`

const ProductImgNavigation = styled.button`
    position: absolute;
    top: 50%;
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

const ProductName = styled.h3`
    max-height: 40px;
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
                'https://via.placeholder.com/400/0000FF/808080?Text=PIC2',
                'https://via.placeholder.com/400/0000FF/808080?Text=PIC3'],
            activeImg: 0
        }
    }

    GoTonextImg = () => {
        const nextImgIndex = this.state.activeImg + 1
        nextImgIndex >= this.state.activeImg ? this.setState({ activeImg: 0 }) : this.setState({ activeImg: nextImgIndex })
    }

    GoToPreviousImg = () => {
        const previousImgIndex = this.state.activeImg - 1
        previousImgIndex < 0 ? this.setState({ activeImg: this.state.imgs.length - 1 }) : this.setState({ activeImg: previousImgIndex })
    }

    render() {
        return (
            <ProductContainer>
                <ProductSection>
                    <ProductImg src={this.state.imgs[this.state.activeImg]} alt="" />
                    <ProductImgPrevious>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </ProductImgPrevious>
                    <ProductImgNext>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </ProductImgNext>
                </ProductSection>
                <ProductSection>
                    <ProductName>Foo</ProductName>
                    <ProductPrice>${10.00}</ProductPrice>
                </ProductSection>
            </ProductContainer>
        )
    }
}
