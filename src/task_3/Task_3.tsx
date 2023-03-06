import React, {ChangeEvent, Children, FC, ReactNode, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import Input from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
    console.log('task')
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            +
            {/*<Input/>*/}
            <input type="text" value={value} onChange={onChange}/>
            <SlowComponent/>
        </div>
    );
};


// type PropsType = {
//     children: ReactNode
// }
//
// export const Task_3:FC<PropsType>= ({children}) => {
//     console.log('task')
//     const [value, setValue] = useState('');
//
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             +
//             {/*<Input/>*/}
//             <input type="text" value={value} onChange={onChange}/>
//             {children}
//         </div>
//     );
// };