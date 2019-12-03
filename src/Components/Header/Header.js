import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const StyledHeader = styled.header`
    background-color: hsl(0,0%,15%);
    img{
        height: 40px;
        margin-right: 5px;
    }
`

const HeaderInner = styled.div`
    padding: 10px 50px;
    display: flex;
    align-items: center;
`

const PageTitle = styled.h1`
    margin: 0;
    color: white;
    line-height: 40px;
` 

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <HeaderInner>
                    <img src={logo} alt="" />
                    <PageTitle>dime</PageTitle>
                </HeaderInner>
            </StyledHeader>
        )
    }
}
