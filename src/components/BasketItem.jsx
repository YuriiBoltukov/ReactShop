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
			<i class='material-icons basket-quantity' onClick={decQuantity}>
				remove
			</i>
			{quantity}
			<i class='material-icons basket-quantity' onClick={incQuantity}>
				add
			</i>{' '}
			= {price * quantity} руб.
			<span
				href='#!'
				class='secondary-content'
				onClick={() => removeFromBasket(id)}>
				<i class='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
}
