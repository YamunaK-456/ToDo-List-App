import "./styles.css";
import {useState} from 'react';

export default function App() {
  
  const [toDoItem,setToDoItem]=useState(["Read SpringBoot","Complete assignments","Prepare breakfast","Sleep for 2 hours","Take a shower"]);

  return (
    <div className="Application">
      <header className="header">
        <h1>ToDo app</h1>
      </header>

      <ul>
        {toDoItem.map((data,ids) => {
          return(
          <li key={ids}>
            <span>{data}</span>
          </li>
          );
        })}
      </ul>

      <button onClick={()=>{
        if (toDoItem.length === 0) {
          setToDoItem([...toDoItem, ["Nothing to do buddy. Sleep!"]]);
          //<p className="empty">"Nothing to do buddy. Sleep!"</p>
        } else {
          toDoItem.length = 0;
          setToDoItem(toDoItem.splice(0, toDoItem.length));
        }
        
      }}>empty</button>
    </div>
  );
}
