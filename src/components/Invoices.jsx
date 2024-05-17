import styled from "styled-components";
import InvoiceItem from "./InvoiceItem";

const fakeData = [
	{
		id: "RF123",
		date: "Due 25 May 2024",
		name: "Jensen Huang",
		price: 1875,
		status: "Paid",
	},
	{
		id: "RF123",
		date: "Due 25 May 2024",
		name: "Alex Grim",
		price: 9500,
		status: "Pending",
	},
	{
		id: "RF123",
		date: "Due 25 May 2024",
		name: "John Morrison",
		price: 2405,
		status: "Draft",
	},
];
const InvoicesContainer = styled.div`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

function Invoices() {
	return (
		<InvoicesContainer>
			{fakeData.map((item) => (
				<InvoiceItem itemInfo={item} key={item.id} />
			))}
		</InvoicesContainer>
	);
}

export default Invoices;
