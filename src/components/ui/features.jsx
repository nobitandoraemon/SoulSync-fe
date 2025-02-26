const Features = () => {
	return(
		<div className="flex flex-col gap-10 justify-center items-center">
			<div className="flex flex-col items-center gap-6">
			<span
      className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm" //Mấy cái nút tròn e copy hết vì e chưa biết cách chỉnh
    >
      Insight
    </span>
			<h1 className="text-4xl font-semibold">Discover Our App Features</h1>
			<p className="text-xl font-thin">"Let the Stars Guide Your Love Story – Where Destiny Meets Technology!"</p>
			</div>
			<div className="px-8 flex gap-8 w-4/5 ">
				<div className="flex flex-col gap-4 w-4/5 ">
				<div
      className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
				<h2 className="text-indigo-700 font-semibold">ZODIAC MATCHING</h2>
				<p className="font-light">Discover connections written in the stars! Our unique matchmaking system pairs you with compatible partners based on astrological signs, helping you find someone who truly aligns with your energy.</p>
				<a href="./"><p className="text-indigo-700">More about us icon ></p></a>
				</div>
				<div className="flex flex-col gap-4 w-4/5">
				<div
      className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
		<h2 className="text-indigo-700 font-semibold">SEAMLESS CHAT</h2>
		<p><p className="font-light">Start conversations effortlessly! Once matched, dive into engaging chats and get to know your potential soulmate in a fun and comfortable space.</p></p>
		<p></p>
		<a href="./"><p className="text-green-700 mt-2">More about us icon ></p></a>
				</div>
				<div className="flex flex-col gap-4 w-4/5">
				<div
      className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
		<h2 className="text-indigo-700 font-semibold">QUEUE SYSTEM</h2>
		<p><p className="font-light"><p><p className="font-light">Our queue system ensures both users are ready to chat. When you and your match both click the button, the chat begins—creating an exciting, mutual connection experience!</p></p></p></p>
		<a href="./"><p className="text-red-700">More about us icon ></p></a>
				</div>
			</div>
		</div>
	)
};

export default Features;
