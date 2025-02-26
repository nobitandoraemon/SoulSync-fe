const QuestionBox = ({Question, Answer}) =>{
	return <div>
			<div className="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" defaultChecked />
				<div className="collapse-title text-xl font-medium">{Question}</div>
				<div className="collapse-content">
					<p>{Answer}</p>
				</div>
			</div>
	</div>
}


const FAQ = () => {
	return <div>
		<section className="dark:bg-gray-100 dark:text-gray-800">
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 bg-pink-200">
				<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
				<p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
				<div className="space-y-4">
					<QuestionBox Question="THIS IS YOUR QUESTION" Answer="THIS IS MY ANSWER"/>
					<QuestionBox Question="THIS IS YOUR QUESTION" Answer="THIS IS MY ANSWER"/>
					<QuestionBox Question="THIS IS YOUR QUESTION" Answer="THIS IS MY ANSWER"/>
				</div>
			</div>
		</section>
	</div>;
};

export default FAQ;
