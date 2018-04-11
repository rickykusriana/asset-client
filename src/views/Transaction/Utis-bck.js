import React from 'react';
import namor from 'namor';

const range = len => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

const newPerson = () => {
	
	return {
		product_name: namor.generate({ words: 1, numbers: 0 }),
		product_qty: Math.floor(Math.random() * 30),
		borrower_name: namor.generate({ words: 1, numbers: 0 })
	};
};

export function makeData(len = 3) {

	return fetch('http://localhost/asset-server/api/transaction/trx')
		.then(function(response) {
			return response.json();
        })
		.then(function(responseJson) {
			// console.log(responseJson);
			// return responseJson;
			return range(len).map(d => {
				return {
					// ...newPerson(),
					// children: range(10).map(newPerson)
					children: range(10).responseJson
				};
			});

		})

		.catch(error => console.log('error is', error));

	// console.log(newPerson);

	// return range(len).map(d => {
	// 	return {
	// 		...newPerson(),
	// 		children: range(10).map(newPerson)
	// 	};
	// });
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
