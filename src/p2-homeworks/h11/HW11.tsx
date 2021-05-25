import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState(100);

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    value2={value2}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>

                <SuperDoubleRange
                    value={value1}
                    value2={value2}
                    onChangeRange={setValue1}
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