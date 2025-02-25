const questions = [
	{
		ques: `What is your company’s purpose?`,
		ans: `We help customers realize their hopes and dreams by providing the best products and services to protect them from life’s uncertainties and prepare them for the future.`,
	},
	{
		ques: `What products or services do you offer?`,
		ans: `For business services provides the intangible goods/products such as treatment, cleaning, education, accounting, and consulting`,
	},
	{
		ques: `How to get started with the product?`,
		ans: `To get started with the product, first download and install the application from the app store or website; then, create an account by providing your email and choosing a password; after logging in, follow the on-screen instructions to set up your profile and familiarize yourself with the key features; if you need further guidance, consult the user manual or contact customer support for assistance.`,
	},
	{
		ques: `How to recover an account?`,
		ans: `To recover an account, typically you need to go to the platform's login page, select the "Forgot Password" option, then provide your registered email address or username; you will usually be asked to answer security questions, verify a code sent to your registered email or phone number, and then set a new password to regain access to your account. `,
	},
];

const FAQ = () => {
	return (
		<div className="p-16 flex flex-col items-center">
			<div className="badge badge-secondary top-6 mb-12">
				Frequently Asked Questions
			</div>

			<div className="join join-vertical w-4/5 bg-base-200">
				{questions.map((question, idx) => {
					return (
						<div
							key={idx}
							className="collapse collapse-arrow join-item border-base-300 border"
						>
							<input type="radio" name="my-accordion-4" defaultChecked />
							<div className="collapse-title text-xl font-medium">
								{question.ques}
							</div>
							<div className="collapse-content">
								<p>{question.ans}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQ;
