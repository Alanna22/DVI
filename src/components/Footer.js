import React from 'react'
import './Footer.css'
import BrandmarkLogo from './img/BrandmarkLogo.png'


function Footer() {
    return (
        <footer>
            <div class="front">
                <img src={ BrandmarkLogo }></img>
                <p>&#169; JusJax 2021</p>
            </div>
        </footer>
        

    )
}

export default Footer
