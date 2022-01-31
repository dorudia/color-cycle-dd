import React, {useState} from 'react';

const Color = ({index}) => {
    const [colorValue, setColorValue] = useState("")

    return (
        <div className="colorContainer">
            <button>-</button>
            <input type="text"
                   value={colorValue}
                   onChange={(e) => setColorValue(e.target.value)}/>
            <button>+</button>
        </div>
    );
};

export default Color;
