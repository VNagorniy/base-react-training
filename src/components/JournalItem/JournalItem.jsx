import './JournalItem.css';

function JournalItem({ title, post, date }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<>
			<div className="journal-item__header">{title}</div>
			<div className="journal-item__body">
				<div className="journal-item__date">{formatedDate}</div>
				<div className="journal-item__text">{post}</div>
			</div>
		</>
	);
}

export default JournalItem;
