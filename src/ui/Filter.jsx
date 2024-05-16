import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const StyledFilter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	/* background: #7c5df9; */

	& span {
		font-size: 1.2rem;
	}
`;

function Filter() {
	return (
		<StyledFilter>
			<span>Filter by status</span>
			<FaAngleDown style={{ color: "#7c5df9" }} />
		</StyledFilter>
	);
}

export default Filter;
