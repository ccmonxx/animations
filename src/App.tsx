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
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
`;

const boxVariants = {
	hover: { scale: 1.5, rotate: 90 },
	click: { scale: 1, borderRadius: "100px" },
	drag: { backgroundColor: "rgb(46, 204,113)" },
};

function App() {
	return (
		<Wrapper>
			<Box drag variants={boxVariants} whileHover="hover" whileTap="click" whileDrag="drag" />
		</Wrapper>
	);
}

export default App;
