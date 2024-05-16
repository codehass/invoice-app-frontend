import styled from "styled-components";
import { GoPlus } from "react-icons/go";

const BtnContainer = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	background: #7c5df9;
	padding: 0.4rem;
	border: none;
	border-radius: 2rem;

	& span {
		display: flex;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 5px;
		background: #fff;
		color: #7c5df9;
		justify-content: center;
		align-items: center;
	}

	& p {
		font-size: 22px;
		padding-right: 6px;
	}
`;

function AddButton() {
	return (
		<BtnContainer>
			{" "}
			<span>
				<GoPlus style={{ color: "#7c5df9", fontWeight: "bold" }} />
			</span>
			<p>New Invoice</p>
		</BtnContainer>
	);
}

export default AddButton;
