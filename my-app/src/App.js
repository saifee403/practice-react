import './App.css';
import Subscriptions from './components/Subscriptions';

function App() {
  let subscriptions = [
    {
      id:"1",
      date : (new Date("2023","05","18")),
      title : "Monthly Subscriptions",
      amount : "250"
    },
    {
      id:"2",
      date : (new Date("2023","05","18")),
      title : "Yearly Subscriptions",
      amount : "250"
    },
    {
      id:"3",
      date : (new Date("2023","05","18")),
      title : "weekly Subscriptions",
      amount : "250"
    }
  ]
  return (
    <div className="App">
      <h1>Muhammad Saif Ur Rehman</h1>
      <Subscriptions passDate={subscriptions[0].date.toISOString()} passTitle={subscriptions[0].title} passAmount={subscriptions[0].amount}/>
      <Subscriptions passDate={subscriptions[1].date.toISOString()} passTitle={subscriptions[1].title} passAmount={subscriptions[1].amount}/>
      <Subscriptions passDate={subscriptions[2].date.toISOString()} passTitle={subscriptions[2].title} passAmount={subscriptions[2].amount}/>
    </div>
  );
}

export default App;
