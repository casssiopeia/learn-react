import React, { useState } from "react";

// TODO: useRef

export const App = () => {
  const [inpValue, setInpValue] = useState(""); // inpValue - это листик препода

  const onInputChange = (event) => {
    // event.target.value то что нашептал сосед
    setInpValue(event.target.value); // передаем что нашептал сосед преподу
  };

  const clearInp = () => {
    setInpValue("");
  };

  // создать селект (авто), сделать его контролируемым
  // после каджого выбора, выводить на экран текущий выбранный элемент
  // * сделать кнопку которая будет прятать или показывать текущий выбранный элемент(див) и селект
  // ** всякий раз когда мы показываем элемент, он сохраняет последний выбранный авто

  return (
    <div>
      <button onClick={clearInp}>clear</button>
      <input 
        value={inpValue} // препод передает листик что показывать
        type="text"
        id="inp"
        onChange={onInputChange}
      />
      <div>Your input is: {inpValue}</div>
    </div>
  );
};
