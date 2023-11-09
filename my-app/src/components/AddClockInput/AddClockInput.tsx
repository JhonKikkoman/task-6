import { useState } from "react";
import { InputForClock } from "./InputForClock/InputForClockLogic";

type propFunc = {
    propClbk: Function
}

export type stateT = {
    capitolValue: string,
    timeLineValue: string,
    id: string
}

type targetT = {
    target: {
        name: string,
        value: string
    }
}

export function AddClockInput({ propClbk }: propFunc) {
    const [state, setState] = useState<stateT>({
        capitolValue: '',
        timeLineValue: '',
        id: ''
    });

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        propClbk(state);
        setState({
            capitolValue: '',
            timeLineValue: '',
            id: ''
        })
    }

    const handlerChange = ({ target }: targetT) => {
        const { name, value } = target;
        const capStr: string = name === 'capitol_name' ? value : state.capitolValue;
        const timeStr: string = name === 'timeline_name' ? value : state.timeLineValue
        setState({
            capitolValue: capStr,
            timeLineValue: timeStr,
            id: `${capStr}_${timeStr}`
        })
    }

    return (
        <>
            <form action="" className="inner_container" onSubmit={handlerSubmit}>
                <InputForClock
                    uniqNameForInput="capitol"
                    labelText="Название"
                    value={state.capitolValue}
                    propFunc={handlerChange} />
                <InputForClock
                    uniqNameForInput="timeline"
                    labelText="Временная зона"
                    value={state.timeLineValue}
                    propFunc={handlerChange} />
                <input type="submit" value="Добавить" className="submit_btn" />
            </form>
        </>
    );
}