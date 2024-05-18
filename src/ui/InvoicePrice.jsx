import styled from "styled-components";

const H3 = styled.h3`
	font-size: 24px;
`;
const InvoicePrice = ({ price }) => <H3>£{price}</H3>;

export default InvoicePrice;
