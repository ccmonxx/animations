import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	border-radius: 15px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: #fff;
`;

function App() {
	return (
		<Wrapper>
			<Box
				initial={{ scale: 0 }}
				animate={{ scale: 1, rotate: 360 }}
				transition={{ type: "spring", delay: 0.5 }}
			/>
		</Wrapper>
	);
}

export default App;
