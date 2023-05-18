import './App.css';
import NAvbar from './components/NAvbar';
import Subscriptions from './components/Subscriptions';

function App() {
  let subscription =[
    {
      id:"1",
      date: (new Date("2023","05","18")),
      title:"Monthly Subscription",
      price:"30$"
    },
    {
      id:"2",
      date: (new Date("2023","05","18")),
      title:"Weekly Subscription",
      price:"8$"
    },
    {
      id:"3",
      date: (new Date("2023","05","18")),
      title:"Yearly Subscription",
      price:"360$"
    },
    {
      id:"4",
      date: (new Date("2023","05","18")),
      title:"Daily Subscription",
      price:"1$"
    },
    {
      id:"5",
      date: (new Date("2023","05","18")),
      title:"15Days Subscription",
      price:"15$"
    }
  ]
  
  return (
    <>
    <NAvbar/>
    <div className="App">
      <h1>Muhammad Saif Ur Rehman</h1>
      <Subscriptions date={subscription[0].date.toISOString()} title={subscription[0].title} amount={subscription[0].price}/>
      <Subscriptions date={subscription[1].date.toISOString()} title={subscription[1].title} amount={subscription[1].price}/>
      <Subscriptions date={subscription[2].date.toISOString()} title={subscription[2].title} amount={subscription[2].price}/> 
      <Subscriptions date={subscription[3].date.toISOString()} title={subscription[3].title} amount={subscription[3].price}/> 
      <Subscriptions date={subscription[4].date.toISOString()} title={subscription[4].title} amount={subscription[4].price}/> 
    </div>
    </>
  );
}

export default App;
