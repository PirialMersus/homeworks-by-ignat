import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";
import s from './SuperDoubleRange.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});
function valuetext(value: number) {
    return `${value}`;
}

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    // value?: number
    value2: number[]
    handleChange: (event: any, newValue: number | number[]) => void
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
        handleChange,
        ...restProps
        // min, max, step, disable, ...
    }
) => {

    const classes = useStyles();

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    }
    // сделать самому, можно подключать библиотеки
    // const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <div className={s.wrapper}>
            <span className={s.spans}>{value}</span>
            <input
                type={"range"}
                onChange={onChangeCallback}
                // className={finalRangeClassName}
                value={value}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <span className={s.spans}>{value2[1]}</span>
            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom>
                    Task with *
                </Typography>
                <Slider
                    value={value2}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    // disabled
                />
            </div>
        </div>
    );
}

export default SuperDoubleRange;
