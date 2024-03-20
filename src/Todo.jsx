import { useState } from 'react';
import logo from './logo.svg';
import './Todo.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';


export const Todo = () => {
  const [incompleteTodos,setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2"
  ]);

  const [completeTodos,setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2"
  ]);

  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンの機能を実装
  const onClickAdd = () => {
    if (todoText === "") return;
    //追加ボタンを押したときに、incompletetodoに入れる
    //スプレッド構文⇒新しくincompleteTodosをコピーして、newTodosにセットしている上で、todoTextを追加している
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  //削除ボタンの機能を実装
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);    
  }

  //完了ボタンの機能を実装
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  //戻すボタンの機能を実装
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5

  return(
    <>
    <InputTodo
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={onClickAdd} 
      disabled={isMaxLimitIncompleteTodos}
    />
    {isMaxLimitIncompleteTodos && (
          <p style={{color:"red"}}>
          登録できるTODOは5つまで！
        </p>  
    )}
    <IncompleteTodos
      todos = {incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
    <CompleteTodos
      todos = {completeTodos}
      onClick={onClickBack}
    />
    </>
  )
}