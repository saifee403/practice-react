import './App.css';
import Subscriptions from './components/Subscriptions';

function App() {
  let subscription=[
    {
      id:"1",
      date:(new Date("2023","05","18")),
      title:"Monthly Sub",
      price: "15$"
    },
    {
      id:"2",
      date:(new Date("2023","05","18")),
      title:"Weekly Sub",
      price: "4$"
    },
    {
      id:"3",
      date:(new Date("2023","05","18")),
      title:"Yearly Sub",
      price: "150$"
    },
    {
      id:"4",
      date:(new Date("2023","05","18")),
      title:"Daily Sub",
      price: "0.20$"
    }
  ]
  
  return (
    <div className="App">
      <h1>Muhammad Saif Ur Rehman</h1>
      <Subscriptions date={subscription[0].date.toISOString()} title={subscription[0].title} amount={subscription[0].price}/>
      <Subscriptions date={subscription[1].date.toISOString()} title={subscription[1].title} amount={subscription[1].price}/>
      <Subscriptions date={subscription[1].date.toISOString()} title={subscription[2].title} amount={subscription[2].price}/>

      {/* <Subscriptions passDate={subscriptions[0].date.toISOString()} passTitle={subscriptions[0].title} passAmount={subscriptions[0].amount}/>
      <Subscriptions passDate={subscriptions[1].date.toISOString()} passTitle={subscriptions[1].title} passAmount={subscriptions[1].amount}/>
      <Subscriptions passDate={subscriptions[2].date.toISOString()} passTitle={subscriptions[2].title} passAmount={subscriptions[2].amount}/> */}
    </div>
  );
}

export default App;
