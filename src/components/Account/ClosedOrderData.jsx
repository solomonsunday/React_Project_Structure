import React from 'react'
import OrderAvailableDataRow from './OrderAvailableDataRow'
import femaleShirt from "../../assets/images/Products/femaleShirt.png";
import lenovoComputer from "../../assets/images/Products/lenovoComputer.png";
import sandal from  "../../assets/images/Products/sandal.png";

function ClosedOrderData() {
    return (
        <div>
            <OrderAvailableDataRow itemImage={lenovoComputer} bgColor='#696969'/>
            <OrderAvailableDataRow itemImage={femaleShirt} bgColor='#696969'/>
            <OrderAvailableDataRow itemImage={sandal} bgColor='#696969'/>
        </div>
    )
}

export default ClosedOrderData
