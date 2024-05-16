import styled from "styled-components";

const StyledNav = styled.div`
	& p {
		font-size: 1rem;
		color: #aaabbd;
		margin: 0;
	}

	& h3 {
		margin: 0;
	}
`;

function DashboardNavTitle() {
	return (
		<StyledNav>
			<h3>Invoices</h3>
			<p>The are 7 total invoices</p>
		</StyledNav>
	);
}

export default DashboardNavTitle;
