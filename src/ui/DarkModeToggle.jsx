import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
	const isDarkMode = true;

	return (
		<ButtonIcon>{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}</ButtonIcon>
	);
}

export default DarkModeToggle;
