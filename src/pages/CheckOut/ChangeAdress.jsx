import React from 'react'
import CheckAddressLink from '../../components/CheckOut/CheckAddressLink'
import Footer from '../../components/Footer/Footer'
import HeaderThree from '../../components/Header/HeaderThree'

function ChangeAddress() {
    return (
        <div>
            <HeaderThree/>
            <div className='body__wrapper putAtMiddle'>
            <CheckAddressLink/>
            
            </div>
            <Footer/>
            
        </div>
    )
}

export default ChangeAddress
