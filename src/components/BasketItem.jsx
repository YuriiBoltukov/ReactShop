import React from 'react';

export function BasketItem(props) {
	const {
		id,
		name,
		price,
		quantity,
		removeFromBasket,
		decQuantity = Function.prototype,
		incQuantity = Function.prototype,
	} = props;
	return (
		<li className='collection-item'>
			{name} x{' '}
			<i
				className='material-icons basket-quantity'
				onClick={() => decQuantity(id)}>
				remove
			</i>
			{quantity}
			<i
				className='material-icons basket-quantity'
				onClick={() => incQuantity(id)}>
				add
			</i>{' '}
			= {price * quantity} руб.
			<span
				href='#!'
				className='secondary-content'
				onClick={() => removeFromBasket(id)}>
				<i className='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
}
