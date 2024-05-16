import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: center;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #7c5df9;
	width: 100%;
	height: 80px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
`;

function Logo() {
	return (
		<StyledLogo>
			<LogoContainer>
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
					<path
						fill="#FFF"
						fillRule="evenodd"
						d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
					></path>
				</svg>
			</LogoContainer>
		</StyledLogo>
	);
}

export default Logo;
