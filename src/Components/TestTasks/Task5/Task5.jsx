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
                    title: 'Address',
                    type: 'string',
                    filtering: true,
                    sorting: true,
                    style: {border: '1px solid black'}
                },
             {
                    title: 'Company capitalization',
                    type: 'number',
                    filtering: false,
                    sorting: true,
                    style: {border: '1px solid black'}
                }],
        cells:
            [
                { value: 'Microsoft', style: {border: '1px solid red'} },
                { value: 'New Yourk', style: {border: '1px solid red'} },
                { value: 43, style: {border: '1px solid green'} },
                { value: 'Google', style: {border: '1px solid red'} },
                { value: 'New Yourk', style: {border: '1px solid red'} },
                { value: 57, style: {border: '1px solid green'} },
                { value: 'Macrosoft', style: {border: '1px solid red'} },
                { value: 'Viniccya', style: {border: '1px solid red'} },
                { value: 59, style: {border: '1px solid green'} }
            ]
    })

    return (
        <Table data={data} />
    );
}

export default Task5;