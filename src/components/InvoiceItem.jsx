import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";

import InvoicePrice from "../ui/InvoicePrice";
import InvoiceStatus from "../ui/InvoiceStatus";
import InvoiceInfo from "../ui/InvoiceInfo";

const StyledInvoice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #1f203c;
	padding: 30px 20px;
	border-radius: 15px;
	border: 2px solid transparent;

	&:hover {
		cursor: pointer;
		border-color: #7d5cf9;
	}
`;

const InvoiceActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
`;

function InvoiceItem({ itemInfo }) {
	const { id, date, name, price, status } = itemInfo;

	return (
		<StyledInvoice>
			<InvoiceInfo id={id} date={date} name={name} />

			<InvoiceActions>
				<InvoicePrice price={price} />
				<InvoiceStatus status={status} />
				<MdNavigateNext style={{ color: "#7D5CF9" }} />
			</InvoiceActions>
		</StyledInvoice>
	);
}

export default InvoiceItem;
