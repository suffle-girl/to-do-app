import { useEffect, useState } from "react";
import "./style.css";

export const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://669a16149ba098ed61fe4298.mockapi.io/todo/api/v1/tasks"
      );
      const data = await response.json();

      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="container--list">
      <h2 className="list--title">Here is a list of your tasks:</h2>
      {console.log(tasks)}
    </div>
  );
};
