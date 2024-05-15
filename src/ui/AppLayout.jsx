import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 5rem 1fr;
	grid-template-rows: auto;
	height: 100vh;
`;

const Main = styled.div`
	max-width: 120rem;
`;

function AppLayout() {
	return (
		<StyledLayout>
			<SideBar />
			<Main>
				<Outlet />
			</Main>
		</StyledLayout>
	);
}

export default AppLayout;
