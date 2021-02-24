import React, { useEffect, useState } from 'react';

const Clock = () => {

    const {timeString} = useClock();

    return (
        <div className="clock">
            <p className="clock__time">{timeString}</p>
        </div>
        
    );
}
const BetterClock = () => {

    const {timeString} = useClock();

    return (
        <div className="better-clock">
            <p className="better-clock__time"> Time: {timeString}</p>
        </div>
       
    );
}

const useClock = () => {
    const [timeString, setTimeString] = useState<string>('null');
    useEffect( () => {
        const timeInterval = setInterval( ()=> {
            const now = new Date();
            setTimeString(now.toString());
        }, 1000)
        return () => {
            clearInterval(timeInterval)
        }
    }, []);

    return {timeString};
}
export {Clock, BetterClock};