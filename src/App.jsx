import React, { useState } from "react";
import "./styles.css";

//状態が変わるものはstateで定義する

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiii"]); //右辺[]は初期値
  const [completeTodos, setCompleteTodos] = useState(["uuuu"]); //右辺[]は初期値

  // inputの値を使用する場合の定型文（onChangeとonChange関数）
  const onChangeTodoText = (event) => setTodoText(event.target.value); //event（input）で実際に入力された値
  const onClickAdd = () => {
    if (todoText === "") return; //空白の時は何も起こらないようにする
    const newTodos = [...incompleteTodos, todoText]; //配列~~の要素を丸ごとコピー「...~~」
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {/* jsだから{} */}
          {/* mapを使ってレンダリングする場合、key設定が必要 */}
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
