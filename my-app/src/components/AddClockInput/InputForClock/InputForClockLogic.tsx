type propT = {
    uniqNameForInput: string,
    labelText: string,
    value: string,
    propFunc: Function
}

export function InputForClock({ uniqNameForInput, labelText, value, propFunc }: propT) {

    return (
        <>
            <label htmlFor={`${uniqNameForInput}_id`} className="hint_label">{labelText}</label>
            <input
                type="text"
                name={`${uniqNameForInput}_name`}
                id={`${uniqNameForInput}_id`}
                value={value}
                onChange={(e) => propFunc(e)}
                className={`${uniqNameForInput}_field`} />
        </>
    );
}