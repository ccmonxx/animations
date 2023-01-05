import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	border-radius: 30px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
`;

const Circle = styled(motion.div)`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: #ffcc00;
`;

function App() {
	const [clicked, setClicked] = useState(false);
	const toggleClicked = () => setClicked((prev) => !prev);

	return (
		<Wrapper onClick={toggleClicked}>
			<Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
			<Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
		</Wrapper>
	);
}

export default App;
