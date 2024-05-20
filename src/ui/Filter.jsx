import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const StyledFilter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	position: relative;

	& span {
		font-size: 1.2rem;
	}

	& button {
		background: none;
		border: none;
	}
`;

const DropDown = styled.div`
	position: absolute;
	left: 0;
	bottom: -100px;
	width: 150px;
	font-size: 20px;
	background: red;
	border-radius: 5px;
`;

function Filter() {
	const [dropOpen, setDropOpen] = useState(false);

	return (
		<StyledFilter>
			{dropOpen ? (
				<DropDown>
					<input type="checkbox" id="draft" value="draft" />
					<label htmlFor="">Draft</label> <br />
					<input type="checkbox" value="pending" />
					<label htmlFor="pending">Pending</label> <br />
					<input type="checkbox" value="paid" />
					<label htmlFor="paid">Paid</label> <br />
				</DropDown>
			) : (
				""
			)}

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
