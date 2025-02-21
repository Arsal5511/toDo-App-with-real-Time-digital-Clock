import { useEffect, useState } from "react";

export const DateTime = () => {
    const [dateTime, setDateTime] = useState('');


    useEffect(() => {     // why he make a useEffect hook

        const interval = setInterval(() => {
            let newDate = new Date();
            let time = newDate.toLocaleTimeString();
            let date = newDate.toDateString()

            setDateTime(`${date} - ${time}`)
        }, 1000);

        return () => clearInterval(interval) // why he did this

    }, [])
    return (
        <h3 className="date">{dateTime}</h3>

    )
}