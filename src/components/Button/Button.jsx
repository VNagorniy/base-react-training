import { useState } from 'react';
import './Button.css';

function Button() {
	const [text, setText] = useState('Сохранить');

	const clicked = () => {
		setText((t) => t + '!');
		console.log('Привет');
	};

	return (
		<button onClick={clicked} className="button accent">
			{text}
		</button>
	);
}

export default Button;
