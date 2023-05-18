import React from 'react'
import "./Subscription.css"

function Subscriptions(props) {
  return (
    <div className='subscription'>
        <div className="subscription_title">{props.date}</div>
        <h2><div className="title">{props.title}</div></h2>
        <div className="subscription_price ">{props.amount}</div>
      
    </div>
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
