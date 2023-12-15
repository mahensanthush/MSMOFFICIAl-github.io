import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <div className='footer'>
                <h3>Contact Imformation</h3>
                <h3>mahensanthush4@gmail.com</h3>
                <h3>© 2023 Mahen Santhush. All rights reserved.</h3>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`

display: flex;
padding-top: 10px;
flex-direction: column;
justify-content: flex-end;
min-height: 100px;


.footer{
    z-index: 1;
    flex:1;
    background-color: #333; 
    color: #fff; 
    text-align: center;
    padding: 20px;

}
`

export default Footer
