import React, { useCallback, useContext, useEffect } from 'react';
import Key from './Key';
import { AppContext } from '../App';

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onSelectLetter, onEnter, onDelete, disabledLetters } = useContext(AppContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyboard = useCallback((event) => {
        if (event.key === 'Enter') {
            onEnter();
        }
        else if (event.key === 'Backspace') {
            onDelete();
        }
        else {
            keys1.forEach((key) => {
                if (event.key.toUpperCase() === key.toUpperCase()) {
                    onSelectLetter(key);
                }
            });
            keys2.forEach((key) => {
                if (event.key.toUpperCase() === key.toUpperCase()) {
                    onSelectLetter(key);
                }
            });
            keys3.forEach((key) => {
                if (event.key.toUpperCase() === key.toUpperCase()) {
                    onSelectLetter(key);
                }
            });
        }
    });

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard);

        return () => {
            document.removeEventListener('keydown', handleKeyboard);
        }
    }, [handleKeyboard]);

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className="line1">
                {keys1.map((key, index) => {
                    return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="line2">
                {keys2.map((key, index) => {
                    return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="line3">
                <Key keyVal={"Enter"} bigKey={true} />
                {keys3.map((key, index) => {
                    return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
                })}
                <Key keyVal={"Delete"} bigKey={true} />
            </div>
        </div>
    )
}

export default Keyboard;
