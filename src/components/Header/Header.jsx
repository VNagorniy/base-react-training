import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', './folder.svg'];
function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleIndex = useCallback(() => {
		setLogoIndex((state) => Number(!state));
	}, []);
	return (
		<>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
			<Button onClick={toggleIndex}>Смена логотипа</Button>
		</>
	);
}

export default Header;
