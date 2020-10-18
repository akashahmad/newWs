import React from 'react'
import DateInput from '../../atoms/searchByDateInput/searchByDateInput'
import Input from '../../atoms/input/input'
interface ListFilterInputs {
    placeholder: string;
    type: string;
    // onChange: any;
}
export default ({ placeholder,type }: ListFilterInputs) => {
    return (
        <div className="flex flex-column md:flex-row xl:flex-row lg:flex-row">
            <Input onChange={""} placeholder={placeholder} type={type}/>
            <DateInput />
            <DateInput />
        </div>
    );
}
