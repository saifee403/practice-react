import './App.css';
import NAvbar from './components/NAvbar';
import Subscriptions from './components/Subscriptions';

function App() {
  let booking=[
    {
      id:"1",
      date:(new Date('2023','05','19')),
      from:"Multan",
      to:"Lahore",
      ticket:"1890"
    },
    {
      id:"2",
      date:(new Date('2023','05','19')),
      from:"Multan",
      to:"Lahore",
      ticket:"1890"
    },
    {
      id:"3",
      date:(new Date('2023','05','19')),
      from:"Multan",
      to:"Lahore",
      ticket:"1890"
    }
  ]
  // let subscription =[
  //   {
  //     id:"1",
  //     date: (new Date("2023","04 ","18")),
  //     title:"Monthly Subscription",
  //     price:"30$"
  //   },
  //   {
  //     id:"2",
  //     date: (new Date("2023","05","18")),
  //     title:"Weekly Subscription",
  //     price:"8$"
  //   },
  //   {
  //     id:"3",
  //     date: (new Date("2023","05","18")),
  //     title:"Yearly Subscription",
  //     price:"360$"
  //   },
  //   {
  //     id:"4",
  //     date: (new Date("2023","05","18")),
  //     title:"Daily Subscription",
  //     price:"1$"
  //   },
  //   {
  //     id:"5",
  //     date: (new Date("2023","05","18")),
  //     title:"15Days Subscription",
  //     price:"15$"
  //   }
  // ]
  
  return (
    <>
    <NAvbar/>
    <div className="App">
      <h1>Muhammad Saif Ur Rehman</h1>
      <Subscriptions date={booking[0].date} from={booking[0].from} to={booking[0].to} ticket={booking[0].ticket}/>
      <Subscriptions date={booking[1].date} from={booking[1].from} to={booking[1].to} ticket={booking[1].ticket}/>
      <Subscriptions date={booking[2].date} from={booking[2].from} to={booking[2].to} ticket={booking[2].ticket}/>
    </div>
    </>
  );
}

export default App;
