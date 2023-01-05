import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const BiggerBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 500px;
	height: 500px;
	border-radius: 40px;
	background-color: rgba(255, 255, 255, 0.4);
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
`;

const boxVariants = {
	hover: { rotate: 90 },
	click: { borderRadius: "100px" },
};

function App() {
	const biggerBoxRef = useRef<HTMLDivElement>(null);

	return (
		<Wrapper>
			<BiggerBox ref={biggerBoxRef}>
				<Box
					variants={boxVariants}
					whileHover="hover"
					whileTap="click"
					drag
					dragSnapToOrigin
					dragConstraints={biggerBoxRef}
					dragElastic={0.5}
				/>
			</BiggerBox>
		</Wrapper>
	);
}

export default App;
