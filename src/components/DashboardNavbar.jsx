import styled from "styled-components";
import AddButton from "../ui/AddButton";
import DashboardNavTitle from "../ui/DashboardNavTitle";
import Filter from "../ui/Filter";

const StyledDashboardNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ActionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

function DashboardNavbar() {
	return (
		<StyledDashboardNav>
			<DashboardNavTitle />
			<ActionContainer>
				<Filter />
				<AddButton />
			</ActionContainer>
		</StyledDashboardNav>
	);
}

export default DashboardNavbar;
