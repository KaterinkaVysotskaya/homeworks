import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'yellow', 'blue', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.themes.theme)
    const dispatch = useDispatch()


    // useDispatch, onChangeCallback
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       
       dispatch(changeThemeC(e.toString()))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect
             options={themes}
             onChangeOption={onChangeCallback} />

            <hr/>
        </div>
    );
}

export default HW12;
