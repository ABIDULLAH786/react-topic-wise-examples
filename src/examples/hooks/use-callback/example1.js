import React, { useState, useCallback, useEffect, memo } from 'react';

export default function UseCallbackExample1() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        console.log("In getItems")
        return [number, number + 1, number + 2];
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}


const List = memo(({ getItems }) => {
    console.log("List Component Rendered!")
    const [items, setItems] = useState([]);
    const itemsMemo = useCallback(getItems, []); // Memoize getItems
    useEffect(() => {
        setItems(getItems)
        console.log("Updating Items")
    }, [itemsMemo])

    return items.map((item, index) => <div key={index}>{item}</div>)
})