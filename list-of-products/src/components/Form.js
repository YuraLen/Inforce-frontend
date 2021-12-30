import React, { useState } from 'react';

export const Form = ({ addedTask }) => {
  const [addTaskInput, setAddTaskInput] = useState("");

  const getAddedText = (data) => {
    const addedTask = {
      addTaskInput: data
    };
    setAddTaskInput(addedTask.addTaskInput);
  };

  return (
    <div className={"firstInput"}>
      <input
        placeholder="Создать задачу..." type="text"
        onChange={(e) => getAddedText(e.target.value)}
      ></input>
      <button disabled={!addTaskInput} onClick={() => addedTask(addTaskInput)}>
        Add product
      </button>
    </div>
  );
};