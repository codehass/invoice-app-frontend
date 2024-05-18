import styled from "styled-components";

const statusColors = {
	Paid: {
		background: "#38d4a5",
		color: "#38d4a5",
	},
	Draft: {
		background: "#8789a3",
		color: "#8789a3",
	},
	Pending: {
		background: "#FF8F00",
		color: "#FF8F00",
	},
};

const Status = styled.div`
	border-radius: 5px;
	padding: 5px;
	background: ${(props) =>
		statusColors[props.status]?.background ||
		statusColors.default.background}1f;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	gap: 10px;

	& span {
		background: ${(props) => statusColors[props.status]?.background};
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	& p {
		color: ${(props) => statusColors[props.status]?.color};
		font-size: 20px;
		font-weight: 400;
	}
`;

const InvoiceStatus = ({ status }) => (
	<Status status={status}>
		<span></span>
		<p>{status}</p>
	</Status>
);

export default InvoiceStatus;
