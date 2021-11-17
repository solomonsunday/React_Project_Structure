import React from 'react'
// import { Link } from 'react-router-dom'
import LargeButton from '../Button/LargeButton'

function NoDataUI(props) {
    return (
        <div className="orderContent__group">{props.Image}
          <p className="orderTxt">{props.Topic}</p>
          <p className="orderExplanation">{props.Explanation}</p>
          <div className="button__wrap">
            <a href='/'><LargeButton buttonName="CONTINUE SHOPPING" /></a>
        </div>
        </div>
    )
}

export default NoDataUI
