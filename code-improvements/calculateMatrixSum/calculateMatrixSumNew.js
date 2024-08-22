function calculateMatrixSum(matrix = [[]]) {
    const rowsLength = matrix.length;
    const columnsLength = matrix[0].length;
    let sum = 0;

    for (let rows = 0; rowsLength; rows++) {
        for (let cols = 0; columnsLength; cols++) {
            const element = matrix[rows][cols]
            sum += element
        }
    }

    return sum;
}