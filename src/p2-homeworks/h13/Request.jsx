import React, {ChangeEvent, useEffect, useState} from "react";
import {requestAPI} from './RequestAPI'


function RequestComponent() {
    const [onChecked, setOnChecked] = useState(false)
    const [state, setState] = useState(null)

        const onClickHandler = () => {
            requestAPI.getUsers()
                .then(data => {
                    console.log(data, 'data')
                    setState(data)
                    setOnChecked(true)
                })
                .catch(error => {
                    console.log({...error})
                    console.log(error.response ? error.response.data.errorText : error.message)
                })

        }


    return (
        <div>
            <button onClick={(e) => onClickHandler()}>post</button>
            <input type="checkbox" checked={onChecked}/>
            <div> {JSON.stringify(state)}</div>
        </div>
    );

}

export default RequestComponent;
