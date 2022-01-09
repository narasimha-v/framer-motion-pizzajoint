export const variants = {
	headerVariants: {
		hidden: {
			y: '-100vh'
		},
		visible: {
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 50,
				delay: 0.2
			}
		}
	},
	containerVariants: {
		hidden: {
			opcatity: 0,
			x: '100vw'
		},
		visible: {
			opcatity: 1,
			x: 0,
			transition: {
				type: 'spring',
				when: 'beforeChildren',
				staggerChildren: 0.4,
				mass: 0.4,
				damping: 8
			}
		},
		exit: {
			x: '-100vw',
			transition: {
				ease: 'easeInOut'
			}
		}
	},
	btnContainerVariants: {
		hidden: {
			x: '-100vw'
		},
		visible: {
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 120
			}
		}
	},
	btnVariants: {
		hover: {
			scale: 1.2,
			textShadow: '0px 0px 8px rgb(255, 255, 255)',
			boxShadow: '0px 0px 8px rgb(255, 255, 255)',
			transition: {
				duration: 0.5,
				yoyo: Infinity
			}
		}
	},
	listItemVariants: {
		hover: {
			originX: 0,
			scale: 1.2,
			color: '#f8e112',
			transition: {
				type: 'spring',
				stiffness: 300
			}
		}
	},
	backdropVariants: {
		hidden: {
			opcatity: 0
		},
		visible: {
			opcatity: 1
		}
	},
	modalVariants: {
		hidden: {
			y: '-100vh',
			opcatity: 0
		},
		visible: {
			y: 0,
			opcatity: 1,
			transition: {
				delay: 0.5
			}
		}
	},
	svgVariants: {
		initial: {
			rotate: -180
		},
		animate: {
			rotate: 0,
			transition: {
				duration: 1
			}
		}
	},
	pathVariants: {
		hidden: {
			opcatity: 0,
			pathLength: 0
		},
		visible: {
			opcatity: 1,
			pathLength: 1,
			transition: {
				duration: 2,
				ease: 'easeInOut'
			}
		}
	},
	loaderVariants: {
		animationOne: {
			x: [-20, 20],
			y: [0, -30],
			transition: {
				x: {
					yoyo: Infinity,
					duration: 0.5
				},
				y: {
					yoyo: Infinity,
					duration: 0.25,
					ease: 'easeOut'
				}
			}
		},
		animationTwo: {
			y: [0, -40],
			x: 0,
			transition: {
				y: {
					yoyo: Infinity,
					duration: 0.25,
					ease: 'easeOut'
				}
			}
		}
	}
};
