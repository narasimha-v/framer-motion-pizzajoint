import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { variants } from './variants';

export const Base = ({ addBase, pizza }) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

	return (
		<motion.div
			variants={variants.containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='base container'>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? 'active' : '';
					return (
						<motion.li
							variants={variants.listItemVariants}
							whileHover='hover'
							key={base}
							onClick={() => addBase(base)}>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>
			{pizza.base && (
				<motion.div variants={variants.btnContainerVariants} className='next'>
					<Link to='/toppings'>
						<motion.button variants={variants.btnVariants} whileHover='hover'>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};
