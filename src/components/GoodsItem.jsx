import React from 'react';

export function GoodsItem(props) {
	const {
		id,
		name,
		description,
		price,
		full_background,
		addToCart = Function.prototype,
	} = props;
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={full_background} alt={name} />
			</div>
			<div className='card-content'>
				<h4 className='card-title'>{name}</h4>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button className='btn' onClick={() => addToCart({ id, name, price })}>
					Buy
				</button>
				<span className='right' style={{ fontSize: '1.8rem' }}>
					{price}руб.
				</span>
			</div>
		</div>
	);
}
