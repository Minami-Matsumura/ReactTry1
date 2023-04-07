// jsでは-は使わずキャメルケースで書く
import React, { useState } from "react";
import "./styles.css";
// default exportではなくexportなので{}が必要
import { InputTodo } from "./Components/InputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

//状態が変わるものはstateで定義する
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]); //右辺[]は初期値
  const [completeTodos, setCompleteTodos] = useState([]); //右辺[]は初期値

  // inputの値を使用する場合の定型文（onChangeとonChange関数）
  const onChangeTodoText = (event) => setTodoText(event.target.value); //event（input）で実際に入力された値
  const onClickAdd = () => {
    if (todoText === "") return; //空白の時は何も起こらないようにする
    const newTodos = [...incompleteTodos, todoText]; //配列~~の要素を丸ごとコピー「...~~」
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    // 参照を引き継がずに配列を生成する
    const newTodos = [...incompleteTodos];
    // 第一引数番目の要素から第二引数個削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  };

  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    newcompleteTodos.splice(index, 1);
    setCompleteTodos(newcompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* インラインでstyleを定義する */}
      {incompleteTodos.length >= 5 && <p style={{ color: "red" }}>上限5個</p>}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClick={onClickBack} />
      <div></div>
    </>
  );
};
