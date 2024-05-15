import styled from "styled-components";

const Img = styled.img`
	border-radius: 50%;
	width: 60%;
`;

function UserLogo() {
	return <Img src="/public/user.avif" />;
}

export default UserLogo;
