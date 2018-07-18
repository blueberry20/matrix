//Olga Smith
//I was tasked with the coding exercise to find submatrix of a given matrix by deleting the specified rows and columns.

let matrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 0],
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 0]
];

let rowsToDelete = [1];
let columnsToDelete = [0, 2];

findSubmatrix(matrix, rowsToDelete, columnsToDelete);

function findSubmatrix(matrix, rowsToDelete, columnsToDelete) {
	//sort rowsToDelete and columnsToDelete in case they come in random order
	rowsToDelete.sort();
	columnsToDelete.sort();

	//loop through array rowsToDelete in reverse order in order to not mess up indexes of the matrix when deleting  elements
	for (let i = rowsToDelete.length - 1; i >= 0; i--) {
		matrix.splice(rowsToDelete[i], 1);
	}

	//first loop through each row in matrix
	matrix.map(function(row) {
		//inside each row, remove elements in reverse order
		for (let i = columnsToDelete.length - 1; i >= 0; i--) {
			row.splice(columnsToDelete[i], 1);
		}
	});

	return matrix;
}
