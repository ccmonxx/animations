import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

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

function App() {
	const x = useMotionValue(0);
	useEffect(() => {
		x.onChange(() => console.log(x.get()));
	}, [x]);

	return (
		<Wrapper>
			<Box style={{ x }} drag="x" dragSnapToOrigin />
		</Wrapper>
	);
}

export default App;
