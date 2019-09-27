import React, {useState} from 'react'
import Table from "./Table";

let Task5 = () => {
    const [data] = useState({
        columns:
            [{
                title: 'CompanyName',
                type: 'string',
                filtering: true,
                sorting: true,
                style: {border: '1px solid black'}
            },
                {
                    title: 'CompanyCapitalization',
                    type: 'number',
                    filtering: true,
                    sorting: true,
                    style: {border: '1px solid black'}
                }],
        cells:
            [
                { value: 'Google', style: {border: '1px solid red'} },
                { value: 43, style: {border: '1px solid green'} },
                { value: 'Apple', style: {border: '1px solid red'} },
                { value: 57, style: {border: '1px solid green'} }
            ]
    })

    return (
        <Table data={data} />
    );
}

export default Task5;