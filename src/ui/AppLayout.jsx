import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 6rem 1fr;
	grid-template-rows: auto;
	height: 100vh;
	background: #141625;
`;

const Main = styled.div`
	max-width: 120rem;
	color: #fff;
	width: 70%;
	height: 100vh;
	margin: auto;
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
