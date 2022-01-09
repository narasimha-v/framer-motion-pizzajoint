import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { variants } from './variants';

export const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		'mushrooms',
		'peppers',
		'onions',
		'olives',
		'extra cheese',
		'tomatoes'
	];

	return (
		<motion.div
			variants={variants.containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='toppings container'>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
					return (
						<motion.li
							variants={variants.listItemVariants}
							whileHover='hover'
							key={topping}
							onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.toppings.length > 0 && (
				<motion.div variants={variants.btnContainerVariants}>
					<Link to='/order'>
						<motion.button variants={variants.btnVariants} whileHover='hover'>
							Order
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};
