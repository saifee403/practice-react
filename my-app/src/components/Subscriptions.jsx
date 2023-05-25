import React, { useState } from 'react'
import "./Subscription.css"
import SubscriptionDate from './SubscriptionDate'

function Subscriptions(props) {
  const  [city, setCity] = useState(props.from)

  const onChangedFun = () =>{
    setCity("Rawalpindi")
    console.log(setCity)
  }
  

  return (
    <>
    <div className='subscription'>
      <SubscriptionDate date={props.date}/>
        {/* <div>{props.date}</div> */}
        <h2 className="subscription_title">{city}</h2>
        <h2 className="subscription_title">{props.to}</h2>
        <div className="subscription_price ">{props.ticket}</div>
        <button type='button' onClick={onChangedFun}>Change Title</button>
      
    </div>
    </>
  )
}

export default Subscriptions



// import React from 'react'
// import "./Subscription.css"

// function Subscriptions(props) {
//     // let date = (new Date("2023","05","18"))
//     // let title = "Monthly Subscriptions"
//     // let amount = "250"
//   return (
//     <div className='subscription'>
//       <h1>{props.passDate}</h1>
//       <h2>{props.passTitle}</h2>
//       <h3>{props.passAmount}</h3>
//     </div>
//   )
// }

// export default Subscriptions
