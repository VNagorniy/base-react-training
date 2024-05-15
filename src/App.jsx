import './App.css';
import CardButton from './CardButton/CardButton';
import JournalItem from './JournalItem/JournalItem';
import Button from './components/Button/Button';

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
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button />
			<CardButton>Новое воспоминание</CardButton>
			<CardButton>
				<JournalItem title={data[0].title} text={data[0].text} date={data[0].date} />
			</CardButton>
			<JournalItem title={data[1].title} text={data[1].text} date={data[1].date} />
		</>
	);
}

export default App;
