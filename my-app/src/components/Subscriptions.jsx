import React from 'react'

function Subscriptions(props) {
    // let date = (new Date("2023","05","18"))
    // let title = "Monthly Subscriptions"
    // let amount = "250"
  return (
    <div>
      <h1>{props.passDate}</h1>
      <h2>{props.passTitle}</h2>
      <h3>{props.passAmount}</h3>
    </div>
  )
}

export default Subscriptions
