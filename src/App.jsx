import { useState } from "react";
import { store } from "./main";
import Display from "./components/Display";
import { connect } from "react-redux";
import "./App.css";
function App() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-[1000px] mx-auto p-2">
      <div>
        <input
          className="p-2 m-2 border-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="text-slate-100 bg-sky-600 px-4 py-1 m-2 rounded-md"
          onClick={() => {
            store.dispatch({ type: "add_todo", payload: value });
            setValue("");
          }}
        >
          Add
        </button>
      </div>

      <div>
        <Display />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
export default connect(mapStateToProps)(App);
