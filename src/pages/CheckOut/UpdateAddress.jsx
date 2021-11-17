import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderThree from '../../components/Header/HeaderThree'
import UpdateAddressLink from '../../components/CheckOut/UpdateAddressLink'

export default function UpdateAddress() {
    return (
        <div>
        <HeaderThree/>
        <div className='body__wrapper putAtMiddle'>
        <UpdateAddressLink/>
        </div>
        <Footer/>
        
    </div>
    )
}
