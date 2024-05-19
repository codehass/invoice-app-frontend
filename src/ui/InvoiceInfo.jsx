import styled from "styled-components";

const InfoInvoiceWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 55%;

	& h5 {
		font-size: 1.4rem;
		color: #f6f6ff;
	}

	& span {
		font-size: 1.3rem;
		font-weight: 100;
		color: #8789a3;
		width: 33%;
		text-align: center;
	}
`;

const InvoiceInfo = ({ id, date, name }) => (
	<InfoInvoiceWrapper>
		<h5>#{id}</h5>
		<span>{date}</span>
		<span>{name}</span>
	</InfoInvoiceWrapper>
);

export default InvoiceInfo;
