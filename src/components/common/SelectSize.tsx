import React, {FC, useState} from "react";

interface Props {
    name: string;
    changeHandler: React.ChangeEventHandler<HTMLSelectElement>
    sizes: {
        [key: number]: string,
    };
}

const SelectSize: FC<Props> = ({name, sizes, changeHandler}) => {

    return (
        <div>
            <label htmlFor={name}>Select game size</label>
            <select name={name} id={name} onChange={changeHandler}>
                <option value="">Choose!</option>
                {
                    Object.entries(sizes).map(([key, value]) => {
                        return (<option key={key} value={key}>{value}</option>)
                    })
                }

            </select>
        </div>

    );
};
export default SelectSize;
