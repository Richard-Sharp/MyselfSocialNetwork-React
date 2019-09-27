import React, {useState } from 'react'
import {ASC, DESC, numberSorting, stringSorting} from './Utils';


let Table = ({data}) => {
    const [sort, setSort] = useState({
        column: "CompanyName",
        direction: DESC
    });
    const [filter, setFilter] = useState([
        { column: "CompanyName", filter: "M"},
        { column: "Address", filter: "ya"},

    ]);

	return (
		<table>
            <Header columns={data.columns} sort={sort} setSort={setSort}/>
            <Body filter={filter} columns={data.columns} cells={data.cells} sort={sort}/>
		</table>
	);
}

let Header = ({columns, setSort, sort}) => {
    return (
        <thead>
        <tr>
        { columns.map((c, index) => <HeaderCell column={c}
                                                key={index}
                                                setSort={setSort}
                                                sort={sort}/>)}
        </tr>
        </thead>
    );
}

let Body = ({columns, cells, sort}) => {
    let rows = [];

    let rowsCount = cells.length / columns.length;

    for (let i=0; i < rowsCount; i++) {
        rows.push([]);
        for (let j=0; j < columns.length; j++) {
            rows[i][j] = cells[ i * columns.length + j ];
        }
    }
    let sortingColumnIndex = columns
        .findIndex( c => c.title === sort.column);

    if (sortingColumnIndex > -1) {
        if (columns[sortingColumnIndex].type === "number") {
            rows.sort(numberSorting(sort, sortingColumnIndex));
        } else if (columns[sortingColumnIndex].type === "string") {
            rows.sort(stringSorting(sort, sortingColumnIndex));
        }
    }

    return (
        <tbody>
        { rows
            .filter(r => {
                //if ()
            })
            .map((r, index) => <Row columns={r} key={index}/>) }
        </tbody>
    );
}

let Row = ({columns}) => {
    return <tr>{columns.map( (c, index) => <Cell cell={c} key={index}/>)}</tr>
}

let HeaderCell = ({column, sort, setSort}) => {
    let style = column.style;

    const sortSymbol = sort.direction === ASC ? "/\\" : "\\/";

    const onCellClick = () => {
        if (column.sorting) {
            setSort({
                ...sort,
                column: column.title,
                direction: column.title === sort.column ? sort.direction === ASC ? DESC : ASC : sort.direction
            });
        }
    }

    const onInputClick = (e) => {
        e.stopPropagation();
    }

    return (
        <th style={style} onClick={onCellClick}>{ column.filtering
            ? <input placeholder={column.title} onClick={onInputClick}/>
            : <span>{column.title}</span>}
            {column.title === sort.column && sortSymbol}
        </th>
    );
}

let Cell = ({cell}) => {
    return (        <td>{cell.value}</td>    );
}

export default Table;