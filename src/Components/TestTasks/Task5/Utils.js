export const ASC = "ASC";
export const DESC = "DESC";

export const numberSorting = (sort, sortingColumnIndex) => (row1, row2) => {
    // если первое число больтоше второго числа, тогда будет полоджиельное число
    // и это значит что первое больше второго
    if (sort.direction === ASC)
    {
        return row1[sortingColumnIndex].value - row2[sortingColumnIndex ].value;
    } else {
        return row2[sortingColumnIndex].value - row1[sortingColumnIndex ].value;
    }
}
export const stringSorting = (sort, sortingColumnIndex) => (row1, row2) => {
    if (row1[sortingColumnIndex].value > row2[sortingColumnIndex].value)
        return sort.direction === ASC ? 1 : -1;
    if (row1[sortingColumnIndex].value < row2[sortingColumnIndex].value)
        return sort.direction === ASC ? -1 : 1;
    if (row1[sortingColumnIndex].value === row2[sortingColumnIndex].value)
        return 0;
}