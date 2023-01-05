import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 200vh;
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
	const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const gradient = useTransform(
		x,
		[-800, 800],
		[
			"linear-gradient(135deg, rgb(0, 210, 238), rgb(199, 86, 255))",
			"linear-gradient(135deg, rgb(0, 238, 155), #fdbc4d)",
		]
	);

	useEffect(() => {
		{
			scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
		}
	}, [scrollYProgress]);

	return (
		<Wrapper style={{ background: gradient }}>
			<Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
		</Wrapper>
	);
}

export default App;
