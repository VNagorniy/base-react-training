import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {
	const data = [
		{
			title: 'Подготовка к прохождению курсов',
			text: 'Инициализация проекта',
			date: new Date()
		},
		{ title: 'Разбор props', text: 'Прокидывание пропсов', date: new Date() }
	];

	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList>
						<CardButton>
							<JournalItem title={data[0].title} text={data[0].text} date={data[0].date} />
						</CardButton>
						<CardButton>
							<JournalItem title={data[1].title} text={data[1].text} date={data[1].date} />
						</CardButton>
					</JournalList>
				</LeftPanel>
				<Body>Body</Body>
			</div>
		</>
	);
}

export default App;
