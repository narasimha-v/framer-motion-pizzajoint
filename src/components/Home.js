import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';
import { variants } from './variants';

export const Home = () => {
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowLoader(false);
		}, 5000);
	}, []);

	if (showLoader) {
		return <Loader />;
	}

	return (
		<motion.div
			className='home container'
			variants={variants.containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<h2>Welcome to Pizza Joint</h2>
			<Link to='/base'>
				<motion.button variants={variants.btnVariants} whileHover='hover'>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};
