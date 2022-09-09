import React from 'react'
//
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// type SuperDoubleRangePropsType = DefaultInputPropsType & {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//
//     // min, max, step, disable, ...
// }
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> =  (
//     {   onChange,
//         onChangeRange,
//         value,
//         min, max, step,
//
//         ...restProps
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//           onChange && onChange(e) // сохраняем старую функциональность
//
//         onChangeRange && onChangeRange([+e.currentTarget.value[0], +e.currentTarget.value[1]])
//     }
//
//
//     return (
//         <>
//
//             <input  type="range"
//                     min="0"
//                     max="100"
//                     // value={props.value[0]}
//                     id="slider-1"
//                     onChange={onChangeCallback}
//                     {...restProps}
//                     value={value}
//                     />
//             <input  type="range"
//                     min="0"
//                     max="100"
//                     // value={props.value[1]}
//                     id="slider-1"
//                     onChange={onChangeCallback}
//
//                     {...restProps}
//                     />
//
//
//
//
//         </>
//     )
// }
//
// export default SuperDoubleRange

export default ()=>{}
