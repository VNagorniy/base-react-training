import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	{
		title: 'Подготовка к прохождению курсов',
		text: 'Инициализация проекта',
		date: new Date()
	},
	{ title: 'Разбор props', text: 'Прокидывание пропсов', date: new Date() }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = (item) => {
		setItems((oldItems) => [
			...oldItems,
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date)
			}
		]);
	};

	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList>
						{items.map((el) => (
							<CardButton>
								<JournalItem title={el.title} text={el.text} date={el.date} />
							</CardButton>
						))}
					</JournalList>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} />
				</Body>
			</div>
		</>
	);
}

export default App;
