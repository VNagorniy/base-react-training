import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

// const INITIAL_DATA = [
// {
// 	"id": 1,
// 	"title": "Подготовка к прохождению курсов",
// 	"text": "Инициализация проекта",
// 	"date": "2024/02/05"
// },
// { "id": 2, "title": "Разбор props", "text": "Прокидывание пропсов", "date": "2024/03/05" }
// ];

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(
				data.map((item) => ({
					...item,
					date: new Date(item.date)
				}))
			);
		}
	}, []);

	const addItem = (item) => {
		setItems((oldItems) => [
			...oldItems,
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1
			}
		]);
	};

	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={items} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} />
				</Body>
			</div>
		</>
	);
}

export default App;
