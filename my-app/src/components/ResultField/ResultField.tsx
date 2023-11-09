import { useEffect, useState } from "react";
import { stateT } from "../AddClockInput/AddClockInput";


type propT = {
    propArr: stateT[],
    propClbk: Function
}
 
export function ResultField({ propArr, propClbk }: propT) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    if (propArr.length === 0) {
        return null;
    }
    const handlerClick = (stringId: string): void => {
        const filterdArr = (propArr.filter((e) => { return e.id !== stringId }));
        propClbk(filterdArr);
    }

    return (
        <>
            <div className="result_container">
                {propArr.map(el => {
                        const hrs = Number(time.setHours(time.getHours() + Number(el.timeLineValue)).toFixed(2));
                        const min = time.getMinutes();
                        const sec = time.getSeconds();
                    return (
                        <>
                            <div key={el.id} className="clock_box">
                                <div className="info_container">
                                    <span className="capitol_name">{el.capitolValue}</span>
                                    <button className="delete_btn" onClick={() => handlerClick(el.id)}>X</button>
                                </div>
                                <div>{`${hrs}:${min}:${sec}`}</div>
                                <div className="circle">
                                    <div className="onen">12</div>
                                    <div className="threen">3</div>
                                    <div className="sixn">6</div>
                                    <div className="ninen">9</div>
                                    <div className="sekundes"></div>
                                    <div className="minutes"></div>
                                    <div className="hours"></div>
                                    <div className="centr"></div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}