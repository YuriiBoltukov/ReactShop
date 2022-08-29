import React from 'react';
import { GoodsItem } from './GoodsItem';

export function GoodsList(props) {
	const { goods = [], addToCart = Function.prototype } = props;

	if (!goods.length) {
		return <h3>Nothing here....</h3>;
	}

	return (
		<div className='items'>
			{goods.map(item => (
				<GoodsItem key={item.id} {...item} addToCart={addToCart} />
			))}
		</div>
	);
}
