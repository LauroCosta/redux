import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {

	const store = useSelector(state => state);

	return (
		<h1>Catalog</h1>
	);
}

export default Catalog;