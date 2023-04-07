import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;

  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
