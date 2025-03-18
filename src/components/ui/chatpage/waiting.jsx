const Waiting = ({ ok, setOk, requestMatch }) => {
	return (
		<form className="max-w-[80%] mx-auto flex items-center justify-between">
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
