import React, {useState} from 'react'
import propType from 'prop-types'

import './index.scss'

const Text = (props) => {
    const {value, type, placeholder, name, prepend, append, outerClassName, inputClassName,errorResponse} = props;

    const [HasError, setHasError] = useState(null)
    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "tel") pattern = "[0-9]*";
    
    const onChange = (event) => {
        const target = {
            target : {
                name : name,
                value : event.target.value
            }
        }
        if (type === "email") {
            if(pattern .test(event.target.value)) setHasError(errorResponse);
            else setHasError(null)
        }
        if (type === "tel") {
            if(event.target.validity.valid) props.onChange(target)
        } else {
            props.onChange(target)
        }
    }


  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
        <div className='input-group'>
            {prepend && (
                <div className='input-group-prepend' style={{backgroundColor: '#152C5B'}}>
                    <span className='input-group-text'>
                        {prepend}
                    </span>
                </div>
            )}
            <input
                name={name}
                type={type}
                pattern={pattern}
                className={["form-control", inputClassName].join(" ")}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {append && (
                <div className='input-group-append' style={{backgroundColor: '#152C5B'}}>
                    <span className='input-group-text'>
                        {append}
                    </span>
                </div>
            )}
        </div>
        {HasError && <span className='error-helper'>{HasError}</span>}
    </div>  
  )
}

export default Text

Text.defaultProps = {
    type : "text",
    pattern : "",
    placeholder : "Please type here ...",
    errorResponse : "Please match the requested format."
}

Text.propType = {
    name : propType.string.isRequired,
    value : propType.oneOfType([propType.number,propType.string]).isRequired,
    onChange : propType.func.isRequired,
    prepend : propType.oneOfType([propType.number,propType.string]),
    append : propType.oneOfType([propType.number,propType.string]),
    type : propType.string,
    placeholder : propType.string,
    outerClassName : propType.string,
    inputClassName : propType.string
}