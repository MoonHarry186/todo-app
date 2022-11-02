function Message(props) {
	var message;
	
	if (props.messageType === 'added') {
		message = <h2>Added successfully</h2>;
	}

	if (props.messageType === 'deleted') {
		message = <h2>Delete successfully</h2>;
	}

	if (props.messageType === 'updated') {
		message = <h2>Updated successfully</h2>;
	}

	return ( 
		<div className="message">
			{message}
		</div>
	);
}

export default Message;