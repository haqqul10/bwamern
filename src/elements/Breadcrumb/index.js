import React from "react";
import propTypes from "prop-types";
import Button from "../Button/index";
import "./index.scss";

const Breadcrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb-number", props.className].join(" ")} >
        {props.data.map((item, index) => (
          <li
            key={`breadcrumb-${index}`}
            className={`breadcrumb-item${
              index === props.data.length - 1 ? " active" : ""
            }`}
          >
            {index === props.data.length - 1 ? (
                item.pageTitle
            ) : (
                <Button type="link" href={item.pageHref}>
                    {item.pageTitle}
                </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;


Breadcrumb.propTypes = {
    data : propTypes.array,
    className : propTypes.string
}
