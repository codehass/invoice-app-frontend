import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const StyledFilter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	/* background: #7c5df9; */

	& span {
		font-size: 1.2rem;
	}

	& button {
		background: none;
		border: none;
	}
`;

function Filter() {
	const [dropOpen, setDropOpen] = useState(false);

	return (
		<StyledFilter>
			<span>Filter by status</span>
			<button onClick={() => setDropOpen((status) => !status)}>
				{dropOpen ? (
					<FaAngleDown style={{ color: "#7c5df9" }} />
				) : (
					<FaAngleUp style={{ color: "#7c5df9" }} />
				)}
			</button>
		</StyledFilter>
	);
}

export default Filter;
