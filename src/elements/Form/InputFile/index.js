import React, { useRef } from "react";
import propType from "prop-types";

import "./index.scss";

const File = (props) => {
  const {
    value,
    accept,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);
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
                accept={accept}
                ref={refInputFile}
                name={name}
                type="file"
                className="d-none"
                value={value}
                onChange={props.onChange}
            />
            <input
                onClick={() => refInputFile.current.click()}
                defaultValue={value}
                placeholder={placeholder}
                className={["form-control", inputClassName].join(" ")}
            />
            {append && (
                <div className='input-group-append' style={{backgroundColor: '#152C5B'}}>
                    <span className='input-group-text'>
                        {append}
                    </span>
                </div>
            )}
        </div>
    </div>  
  );
};

export default File;

File.defaultProps = {
  placeholder: "Browse a file ...",
};

File.propType = {
  name: propType.string.isRequired,
  accept: propType.string.isRequired,
  value: propType.string.isRequired,
  onChange: propType.func.isRequired,
  prepend: propType.oneOfType([propType.number, propType.string]),
  append: propType.oneOfType([propType.number, propType.string]),
  placeholder: propType.string,
  outerClassName: propType.string,
  inputClassName: propType.string,
};
