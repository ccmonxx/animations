import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
	position: absolute;
	top: 200px;
	width: 400px;
	height: 200px;
	border-radius: 30px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
`;

const boxVariants = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	visible: { opacity: 1, scale: 1, rotateZ: 360 },
	leaving: { opacity: 0, scale: 0, y: 50 },
};

function App() {
	const [showing, setShowing] = useState(false);
	const toggleShowing = () => setShowing((prev) => !prev);

	return (
		<Wrapper>
			<AnimatePresence>
				{showing ? (
					<Box
						variants={boxVariants}
						initial="initial"
						animate="visible"
						exit="leaving"
					/>
				) : null}
			</AnimatePresence>
			<button onClick={toggleShowing}>Click Me</button>
		</Wrapper>
	);
}

export default App;
