import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState<number[]>([20, 80]);
    if (value1 !== value2[0]){

    }

    const handleChangeSuperDoubleRange = (event: any, newValue: number | number[]) => {
        setValue2(newValue as number[]);
        if (Array.isArray(newValue)){
            setValue1(newValue[0])
        }
    };

    const handleChangeSuperRange = (value: number) => {
        if(value >= value2[1]){
            setValue2([value2[1],value2[1]])
            setValue1(value2[1])
        }
        setValue2(prevState => [value, prevState[1]])
        // console.log('1231231')
        setValue1(value)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    onChangeRange={handleChangeSuperRange}
                    value={value1}
                    value2={value2[1]}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>

                <SuperDoubleRange
                    value={value1}
                    value2={value2}
                    onChangeRange={handleChangeSuperRange}
                    handleChange={handleChangeSuperDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
