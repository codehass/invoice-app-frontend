import styled from "styled-components";
import AddButton from "../ui/AddButton";

const StyledDashboardNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledNav = styled.div`
	& p {
		font-size: 1rem;
		color: #aaabbd;
		margin: 0;
	}

	& h2 {
		margin: 0;
	}
`;

const ActionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

function DashboardNavbar() {
	return (
		<StyledDashboardNav>
			<StyledNav>
				<h2>Invoices</h2>
				<p>The are 7 total invoices</p>
			</StyledNav>
			<ActionContainer>
				<div>Filter</div>
				<AddButton />
			</ActionContainer>
		</StyledDashboardNav>
	);
}

export default DashboardNavbar;
