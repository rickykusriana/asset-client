import React from 'react';

const range = len => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};


export const fetchAPI = () => {

	return fetch('http://localhost/asset-server/api/transaction/trx')
		.then(function(response) {
			return response.json();
	    })
		.then(function(responseJson) {
			console.log(responseJson);
			return responseJson;
		})
		.catch(error => console.log('error is', error));
}

const newPerson = () => {
	
	// var hihi = {
	// 	id: "1",
	// 	product_name: 'Apa',
	// 	product_qty: 90,
	// 	borrower_name: 'Siapa',
	// 	date_of_borrowing: "2017-10-10 00:00:00",
	// 	date_of_return: "2017-11-10 00:00:00",
	// 	created_at: "2018-03-18 23:44:46",
	// 	updated_at: null,
	// 	created_by: "Ricky",
	// };

	// console.log(hihi);

	// return hihi;

	fetch('http://localhost/asset-server/api/transaction/trx')
		.then(function(response) {
			return response.json();
	    })
		.then(function(responseJson) {
			// console.log(responseJson);
			return responseJson;
			// var isValue = {
			// 	id: responseJson.id,
			// 	product_name: responseJson.product_name,
			// 	product_qty: responseJson.qty,
			// 	borrower_name: responseJson.borrower_name,
			// 	date_of_borrowing: responseJson.date_of_borrowing,
			// 	date_of_return: responseJson.date_of_return,
			// 	created_at: responseJson.created_at,
			// 	updated_at: responseJson.updated_at,
			// 	created_by: responseJson.created_by,
			// }

			// return isValue;
		})
		.catch(error => console.log('error is', error));

};

export function makeData(len = 3) {

	// console.log(newPerson);

	return range(len).map(d => {
		return {
			...newPerson()
		};
	});
}

export const Logo = () =>
	<div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
		For more examples, visit {''}
		<br />
		<a href="https://github.com/react-tools/react-table" target="_blank" rel="noopener noreferrer">
			<img src="https://github.com/react-tools/media/raw/master/logo-react-table.png" alt="img" style={{ width: `150px`, margin: ".5em auto .3em" }}/>
		</a>
	</div>;

export const Tips = () =>
	<div style={{ textAlign: "center" }}>
		<em>Tip: Hold shift when sorting to multi-sort!</em>
	</div>;
