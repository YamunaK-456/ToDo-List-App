import "./styles.css";

export default function App() {
  const ToDoItem=["Read SpringBoot","Complete assignments","Prepare breakfast","Sleep for 2 hours","Take a shower"];
  return (
    <div className="Application">
      <header className="header">
        <h1>ToDo app</h1>
      </header>

      <ul>
        {ToDoItem.map((data,ids) => {
          return(
          <li key={ids}>
            <span>{data}</span>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
