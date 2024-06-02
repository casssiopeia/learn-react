import { useState } from "react";
import React from "react";

// useRef
// TWO WAY BINDIG

export const App = () => {

    const [inpValue, setInpValue] = useState('');

    const [carInpValue, setCarInpValue] = useState('');

    const [shouldShowElems, setShouldShowElems] = useState(true);

    const onShowHideBtn = () => {
        setShouldShowElems( (prevShow) => {
            return !prevShow;
        });
    }

    const onSelectChange = (event) => {
        setCarInpValue(event.target.value);
    }

    const onInputChange = (event) => {
        // event.arget.value - то, что нашептал сосед
        setInpValue(event.target.value); // Передаёт то, что нашептал сосед преподу
    }

    const clearInp = () => {
        setInpValue('');
    }

    return (
        <div>
            <button onClick={clearInp}>CLEAR</button>
            <input value={inpValue} type='text' id="inp" onChange={onInputChange}></input>
            <div>Your input is: {inpValue}</div>
            <div>
                <h3>Выберите марку автомобиля:</h3>
                <button onClick={onShowHideBtn}>SHOW/HIDE</button>
                {shouldShowElems === true && <><select value={carInpValue} onChange={onSelectChange}>
                    <option value=''></option>
                    <option value='Audi'>Audi</option>
                    <option value='BMW'>BMW</option>
                    <option value='Dodge'>Dodge</option>
                    <option value='Ford'>Ford</option>
                    <option value='Lincoln'>Lincoln</option>
                </select>
                <div>Выбранная марка: {carInpValue}</div>
                </>}
            </div>
        </div>
    );
}