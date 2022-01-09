import { motion, useCycle } from 'framer-motion';
import React, { useEffect } from 'react';
import { variants } from './variants';

export const Loader = () => {
	const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

	useEffect(() => {
		setInterval(() => {
			cycleAnimation();
		}, 2000);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<motion.div
				variants={variants.loaderVariants}
				animate={animation}
				className='loader'
			/>
		</>
	);
};
