import { useState } from "react";
import { store } from "../main";
import { connect } from "react-redux";
export const UpdateInputField = ({ value }) => {
  const [udpateValue, setUdpateValue] = useState(value);
  const [didUpdate, setDidUpdate] = useState(false);
  return (
    <>
      {!didUpdate ? (
        <li className="" onClick={() => setDidUpdate(!didUpdate)}>
          {value}
        </li>
      ) : (
        <input
          value={udpateValue}
          onChange={(e) => setUdpateValue(e.target.value)}
        />
      )}
      <button
        onClick={() => {
          store.dispatch({
            type: "update_todo",
            payload: {
              newV: udpateValue,
              preV: value,
            },
          });
          setDidUpdate(!didUpdate);
        }}
        className="p-1 m-2 rounded-md bg-slate-800 text-slate-100"
      >
        Edit
      </button>
    </>
  );
};
const Display = ({ todos }) => {
  return (
    <div>
      <ul className="list-none">
        {todos?.map((item, i) => {
          return (
            <div
              key={i.toString()}
              className="flex items-center justify-between max-w-[400px] rounded-md p-2 m-2 bg-slate-400"
            >
              {<UpdateInputField value={item.item} />}

              <button
                onClick={() => {
                  store.dispatch({ type: "delete_todo", payload: item.item });
                }}
                className="p-1 m-2 rounded-md bg-slate-800 text-slate-100"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};
export default connect(mapStateToProps)(Display);
