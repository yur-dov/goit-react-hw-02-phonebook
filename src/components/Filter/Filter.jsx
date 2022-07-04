import React from "react";

const FilterForm = ({value, onChange}) =>
    <label>
        Find contact by Name:
        <input type="text" value={value} onChange={onChange} />
        </label>
export default FilterForm;