import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some', 'white'];

function HW12() {
    // const theme = 'some'; // useSelector
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)


    const setTheme = (value: string) => {
        dispatch(changeThemeAC(value))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={setTheme}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
