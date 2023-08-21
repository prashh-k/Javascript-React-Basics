import { useState } from "react";

const App = () => {
  let [TodoList, setTodoList] = useState([]);
  let [TodoInput, setTodoInput] = useState("");
  let [mode, setMode] = useState(-1);
  let [isChecked, setIsChecked] = useState();

  let updateInputchange = (event) => {
    setTodoInput(event.target.value);
  };

  let saveNewTodo = () => {
    TodoInput = TodoInput.trim();
    if (TodoInput !== "") {
      var newTodo = {
        title: TodoInput,
        isCompleted: false,
        isChecked: false,
      };

      // In react there are 2 ways to add data in list
      // 1. Using Push operation
      // const _TodoList = [...TodoList];
      // _TodoList.push(newTodo)

      // 2. Using spread operator
      const _TodoList = [newTodo, ...TodoList];
      setTodoList(_TodoList);
      // alert("Todo saved successfully. ");
      setTodoInput("");
      setMode(-1);
    }
  };

  // let markAsCompleted = (index) => {
  //   const _TodoList = [...TodoList];
  //   _TodoList[index].isCompleted = true;
  //   setTodoList(_TodoList);
  // };

  let setUpdate = (index) => {
    setTodoInput(TodoList[index].title);
    setMode(index);
  };

  let updateTodoDetails = () => {
    TodoInput = TodoInput.trim();
    if (TodoInput !== "") {
      const _TodoList1 = [...TodoList];
      _TodoList1[mode].title = TodoInput;
      alert("Todo Update successfully. ");
      setTodoList(_TodoList1);
      setTodoInput("");
      setMode(-1);
    }
  };

  let Deleteitem = (index) => {
    let copy = [...TodoList];
    // console.log(copy[index])
    copy.splice(index, 1);
    setTodoList(copy);

    // delete TodoList[index] ;
    // alert("Todo Deleted successfully.")
  };

  let FinalSaveTodo = (index) => {
    let _TodoListSave = [...TodoList];
    //console.log(_TodoListSave[index]);
    //  let checkitem = _TodoListSave[index]

    //  setIsChecked(true)
    _TodoListSave[index].isCompleted = true;
    _TodoListSave[index].isChecked = true;

    setTodoList(_TodoListSave);
   
  };

  // let checkbox = (index) => {
  //     isChecked = true ;
  //     setIsChecked(isChecked);
  // }

  var newTodo = {
    title: TodoInput,
    isCompleted: false,
    isChecked: false, // Add this property
  };

  const toggleCheckbox = (index) => {
    const updatedTodoList = [...TodoList];
    updatedTodoList[index].isChecked = !updatedTodoList[index].isChecked;
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-10 m-auto ">
            <p className="text-center h3 text-primary mt-2"> Todo App </p>
            <section className="input-group mt-4">
              <input
                type="text"
                className="form-control"
                onChange={updateInputchange}
                value={TodoInput}
              />
              {mode === -1 ? (
                <button
                  className="btn btn-success input-group-text "
                  onClick={saveNewTodo}
                >
                  <i className="fa fa-floppy-o me-1" aria-hidden="true"></i>
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-primary input-group-text "
                  onClick={updateTodoDetails}
                >
                  <i className="fa fa-floppy-o me-1 " aria-hidden="true"></i>
                  Update
                </button>
              )}
            </section>
            <section>
              <ul className="list-group mt-3 ">
                {TodoList.map((value, index) => {
                  return (
                    <li key={index} className="list-group-item ">
                      <div className="row gap-5">
                        <section className="form-check col-9">
                          <input
                            type="checkbox"
                            className="form-check-input "
                            //{ newTodo.isCompleted === true ?  : null }
                            checked={value.isChecked}
                            
                            onChange={() => toggleCheckbox(index)}
                          />
                          <span
                            className={
                              value.isCompleted ? "fst-italic text-danger" : ""
                            }
                          >
                            {value.title}
                          </span>
                        </section>

                        {value.isCompleted === false ? (
                          <section className="col-2">
                            <button
                              className="btn btn-sm btn-danger me-1 "
                              onClick={() => Deleteitem(index)}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-primary me-1"
                              onClick={() => setUpdate(index)}
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button
                              className="btn btn-sm btn-success "
                              // {  === true ?
                              onClick={() => FinalSaveTodo(index)} //: "" }
                            >
                              <i
                                className="fa fa-floppy-o"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </section>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

// const App = () => {
//   return (
//     <>
//       <section className="container-fluid ">
//         <section className="row">
//           <section className="col-lg-6 col-10 m-auto">
//             <p className=" h1 text-center text-primary"> Stopwatch </p>
//             <section className="mt-3 ">
//             </section>
//           </section>
//         </section>
//       </section>
//     </>
//   )
//}

export default App;
