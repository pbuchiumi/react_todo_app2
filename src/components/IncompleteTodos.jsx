export const IncompleteTodos = (props) =>{
    const { todos, onClickComplete,onClickDelete}=props;
    return(
        <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
              //key⇒何個目の要素なのか、を明示的に示すためのもの。一意である必要がある為、TODOにするのは微妙
            <li key={todo}>
              <div className="list-row">
              <p className="todoItem">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
            )
          )}
        </ul>
      </div>
    )
}