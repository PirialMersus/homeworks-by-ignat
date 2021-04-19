import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import store from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from '../../images/Blinking squares.gif'

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector(state => store.getState().loading.isLoading);
    // useSelector, useDispatch
    // const loading = false;

    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        console.log("loading...");
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
           <h3> homeworks 10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loader} alt="loader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
