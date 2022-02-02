import { useEffect, useState } from "react";

export default function Timer({ SetStopTime, questionNumber }) {

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer === 0) return SetStopTime(true)
        const intervel = setInterval(() => {
            setTimer(prev => prev -1);
        }, 1000);
        return () => clearInterval(intervel);
    }, [SetStopTime, timer])
    useEffect(() => {
        setTimer(30);
    }, [questionNumber])

    return timer
}