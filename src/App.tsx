import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 100px;
	width: 400px;
	height: 200px;
	border-radius: 30px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
	font-size: 28px;
`;

const box = {
	invisible: {
		scale: 0,
		opacity: 0,
		x: 500,
	},
	visible: {
		scale: 1,
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
	exit: {
		scale: 0,
		opacity: 0,
		x: -500,
		transition: {
			duration: 1,
		},
	},
};

function App() {
	const [visible, setVisible] = useState(1);
	const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
	const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
	return (
		<Wrapper>
			<AnimatePresence>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
					i === visible ? (
						<Box
							variants={box}
							initial="invisible"
							animate="visible"
							exit="exit"
							key={i}
						>
							{i}
						</Box>
					) : null
				)}
			</AnimatePresence>
			<button onClick={nextPlease}>Next</button>
			<button onClick={prevPlease}>Prev</button>
		</Wrapper>
	);
}

export default App;
