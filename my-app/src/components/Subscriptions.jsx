import React from 'react'

function Subscriptions() {
    let date = (new Date("2023","05","18"))
    let title = "Monthly Subscriptions"
    let amount = "250"
  return (
    <div>
      <h1>{date.toISOString()}</h1>
      <h2>{title}</h2>
      <h3>{amount}</h3>
    </div>
  )
}

export default Subscriptions
