import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    // value?: number
    value2: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        type,
        onChange,
        className,
        value,
        value2,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    }
    // сделать самому, можно подключать библиотеки
    // const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <div className={s.wrapper}>
            <span>{value}</span>
            <input
                type={"range"}
                onChange={onChangeCallback}
                // className={finalRangeClassName}
                value={value}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <span>{value2}</span>
        </div>
    );
}

export default SuperDoubleRange;
