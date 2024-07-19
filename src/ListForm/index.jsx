import "./style.css";

export const ListForm = () => {
  return (
    <div className="container--list-form">
      <form className="list-form" action="">
        <ul className="list-form--wrapper">
          <li className="list-form--item">
            <label htmlFor="">
              Task:
              <input type="text" name="" id="" />
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Description:
              <input type="text" />
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Done:
              <input type="checkbox" name="" id="" />
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Priority:
              <select name="" id="">
                <option value="">Top</option>
                <option value="">Medium</option>
                <option value="">Low</option>
              </select>
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">
              Due Date:
              <input type="date" name="" id="" />
            </label>
          </li>

          <li className="list-form--item">
            <label htmlFor="">Tags:</label>
            <select name="" id="" multiple>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
              <option value="">Option 4</option>
              <option value="">Option 5</option>
            </select>
            <p className="list-form--item__help">
              Press ctrl on Windows or command on Mac for multiple selection.
            </p>
          </li>

          <li className="list-form--item">
            <button type="button">Add to the list</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
