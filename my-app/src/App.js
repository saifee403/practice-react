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
    </div>
  );
}

export default App;
