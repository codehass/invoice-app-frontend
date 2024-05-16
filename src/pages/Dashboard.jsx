import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Invoices from "../components/Invoices";

const StyledDashboard = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 8rem 1fr;
	padding-top: 4rem;
`;

function Dashboard() {
	return (
		<StyledDashboard>
			<DashboardNavbar />
			<Invoices />
		</StyledDashboard>
	);
}

export default Dashboard;
