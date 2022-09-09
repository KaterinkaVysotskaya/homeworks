import React, { ChangeEvent, MouseEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { InitialStateType, loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import Preloader from './preloader/Preloader';

function HW10() {
    const isLoading = useSelector <AppStoreType, boolean>((state) => state.loading.isLoading)
    const dispatch = useDispatch()

    
    const setLoading = () => {
  
        dispatch(loadingAC(true))
      
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 3000)
       
    };

    return (
        <div>
            <hr/>
            homeworks 10

             {isLoading
                ? (
                    <div>
                       <Preloader/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={(e) => setLoading()}>set loading...</SuperButton>
                    </div>
                )
                }
            
   
        </div>
    )
}

export default HW10
