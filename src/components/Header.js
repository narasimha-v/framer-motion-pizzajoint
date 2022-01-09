import { motion } from 'framer-motion';
import React from 'react';
import { variants } from './variants';

export const Header = () => {
	return (
		<header>
			<motion.div className='logo'>
				<motion.svg
					variants={variants.svgVariants}
					initial='initial'
					animate='animate'
					className='pizza-svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'>
					<motion.path
						variants={variants.pathVariants}
						initial='hidden'
						animate='visible'
						fill='none'
						d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
					/>
					<motion.path
						variants={variants.pathVariants}
						initial='hidden'
						animate='visible'
						fill='none'
						d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
					/>
				</motion.svg>
			</motion.div>
			<motion.div
				variants={variants.headerVariants}
				initial='hidden'
				animate='visible'
				className='title'>
				<h1>Pizza Joint</h1>
			</motion.div>
		</header>
	);
};
