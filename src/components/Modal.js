import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { variants } from './variants';

export const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					variants={variants.backdropVariants}
					animate='visible'
					initial='hidden'
					exit='hidden'
					className='backdrop'>
					<motion.div variants={variants.modalVariants} className='modal'>
						<p>Want to make another pizza?</p>
						<Link to='/'>
							<button> Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
