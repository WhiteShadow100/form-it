import React from 'react'
import Select from 'react-select';

function OptionalInput(){

    let options = [
        {value: "one", label:"one"},
        {value: "twp", label:"two"}
    ]
    return(
        <>
            <Select
                defaultValue={options[1]}
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    )
}   

export default OptionalInput;