import React from 'react'
import { styled } from 'styled-components'
import { useNavigate} from 'react-router-dom'

import TopNav from './TopNav'

function Header (){
    const navigate=useNavigate()
    return (
        <HeaderContainer>
            <TopNav/>
        </HeaderContainer>
    )

}

const HeaderContainer=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
padding: 0.4rem;
.logo{
    height: 5rem;
    cursor: pointer;
}

`
export default Header
