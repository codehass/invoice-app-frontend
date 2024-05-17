import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";

const StyledInvoice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #1f203c;
	padding: 30px 20px;
	border-radius: 15px;
	border: 4px solid transparent;

	&:hover {
		cursor: pointer;
		border-color: #070946;
	}
`;

const InfoInvoice = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* gap: 25px; */
	width: 55%;

	& h5 {
		font-size: 1.4rem;
		color: #f6f6ff;
	}

	& span {
		font-size: 1.3rem;
		font-weight: 100;
		color: #8789a3;
	}
`;

const StatusAndPaid = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
`;

const Status = styled.div`
	padding: 5px 20px;
	border-radius: 5px;
	background: #1f2c3f;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 120px;
	/* gap: 15px; */

	& span {
		background: #38d4a5;
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	& p {
		color: #38d4a5;
	}
`;

function InvoiceItem({ itemInfo }) {
	const { id, date, name, price, status } = itemInfo;

	return (
		<StyledInvoice>
			<InfoInvoice>
				<h5>{id}</h5>
				<span>{date}</span>
				<span>{name}</span>
			</InfoInvoice>

			<StatusAndPaid>
				<h3>£{price}</h3>
				<Status>
					<span></span>
					<p>{status}</p>
				</Status>
				<MdNavigateNext style={{ color: "#7D5CF9" }} />
			</StatusAndPaid>
		</StyledInvoice>
	);
}

export default InvoiceItem;
