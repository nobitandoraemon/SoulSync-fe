const Waiting = ({ ok, setOk, requestMatch }) => {
	return (
		<form className="absolute bottom-0 left-0 right-0">
			<h1>Are you ready?</h1>
			<button className="btn" onClick={() => setOk(true)}>
				Okay
			</button>
			<button
				className="btn"
				onClick={() => {
					requestMatch();
				}}
			>
				No
			</button>
		</form>
	);
};

export default Waiting;
