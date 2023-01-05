import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #e09, #d0e);
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
	width: 50vw;
	gap: 10px;
`;

const Box = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 1);
`;

const Overlay = styled(motion.div)`
	display: felx;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
	const [id, setId] = useState<null | string>(null);

	return (
		<Wrapper>
			<Grid>
				{["1", "2", "3", "4"].map((n) => (
					<Box onClick={() => setId(n)} key={n} layoutId={n}>
						{n}
					</Box>
				))}
			</Grid>
			<AnimatePresence>
				{id ? (
					<Overlay
						onClick={() => setId(null)}
						variants={overlay}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<Box layoutId={id} style={{ width: 400, height: 200 }}>
							{id}
						</Box>
					</Overlay>
				) : null}
			</AnimatePresence>
		</Wrapper>
	);
}

export default App;
