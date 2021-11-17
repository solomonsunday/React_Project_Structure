import React from 'react'

export default function PlaceOrderSteps(props) {
    return (
        <div className="mt-3">
            <div className="text-left font-sm placeOrder__txt__wrap">
                {props.text1}
                <strong> {props.strongText} </strong>
                {props.text2}
              </div>
              <div className="py-3">
                <img src={props.imgUrl} alt="sth" className="w-100" />
              </div>
        </div>
    )
}
