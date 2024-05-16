import styled from "styled-components";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserLogo from "./UserLogo";

const StyledContainer = styled.div`
	background-color: var(--color-gray-100);
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 0 0.5rem 1rem 0.5rem;
	/* padding-bottom: 1.5rem; */
`;

function SideBar() {
	return (
		<StyledContainer>
			<Logo />
			<Container>
				<DarkModeToggle />
				<UserLogo />
			</Container>
		</StyledContainer>
	);
}

export default SideBar;
