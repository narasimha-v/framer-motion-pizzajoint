import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { variants } from './variants';

const childVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
};

export const Order = ({ pizza, setShowModal }) => {
	useEffect(() => {
		setTimeout(() => {
			setShowModal(true);
		}, 5000);
	}, [setShowModal]);

	return (
		<motion.div
			variants={variants.containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='container order'>
			<h2>{`Thank you for your order :)`}</h2>
			<div>
				<motion.p variants={childVariants}>
					You ordered a {pizza.base} pizza with:
				</motion.p>
				<motion.div variants={childVariants}>
					{pizza.toppings.map((topping) => (
						<div key={topping}>{topping}</div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};
