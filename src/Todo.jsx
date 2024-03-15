import { useState } from 'react';
import logo from './logo.svg';
import './Todo.css';

export const Todo = () => {
  const [incompleteTodos,setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2"
  ]);

  const [completeTodos,setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2"
  ]);

  return(
    <>
    <div className="input-area">
      <input id = "add-text" placeholder="TODOを入力" />
      <button onClick={setCompleteTodos((prev) => )}>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo) => (
            //key⇒何個目の要素なのか、を明示的に示すためのもの。一意である必要がある為、TODOにするのは微妙
          <li key={todo}>
            <div className="list-row">
            <p className="todoItem">{todo}</p>
            <button>完了</button>
            <button>削除</button>
            </div>
          </li>
          )
        )}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo) =>
        <li key={todo}>
          <div className="list-row">
          <p className="todoItem">{todo}</p>
          <button>戻す</button>
          </div>
        </li>
        )}
      </ul>
    </div>
    </>
  )
}