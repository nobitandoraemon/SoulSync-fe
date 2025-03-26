import { motion } from "framer-motion";
import { ChatIcon } from "../general/icon";
import React from "react";
import logo from "../../../assets/logo.png";
import leo from "../../../assets/leo.png";
import age from "../../../assets/age.png";
const today = new Date();
const currentYear = today.getFullYear();

const ZodiacSigns = [
	// 0
	{
		name: "Bạch Dương",
		gender: "Male",
		symbol: "♈",
		dates: "21/3 – 19/4",
		element: "Lửa",
		personality: ["Mạnh mẽ", "Thẳng thắn", "Nhiệt huyết", "Hào sảng"],
		description:
			"Nói đến tính cách 12 cung hoàng đạo nam khi yêu thì Bạch Dương là chòm sao dẫn đầu về độ “ga lăng” với người yêu. Họ luôn biết tạo ra những điều bất ngờ và khiến cho đối phương trở nên mê mẩn, thẫn thờ ngay từ lần đầu tiên nhìn thấy Bạch Dương. Trong tình yêu, Bạch Dương tỏ ra vẻ “nghịch ngợm” và đào hoa nhưng lại dễ phải lòng với những cô nàng mang nét đẹp truyền thống, dịu dàng và đoan trang.",
	},

	// 1
	{
		name: "Bạch Dương",
		gender: "Female",
		symbol: "♈",
		dates: "21/3 – 19/4",
		element: "Lửa",
		personality: ["Nhiệt huyết", "Chân thành", "Mạnh mẽ", "Độc lập"],
		description:
			"Bạch Dương nữ rất thông minh kể cả trong công việc lẫn cuộc sống thì nàng ta vẫn có thể dễ dàng thể hiện tốt bản thân. Cô nàng cũng được nhiều người yêu mến bởi vẻ ngoài năng động và tràn đầy năng lượng. Khi yêu, Bạch Dương nữ rất biết cách quan tâm và chiều chuộng đối phương nên được người yêu “cưng như cưng trứng”.",
	},

	// 2
	{
		name: "Kim Ngưu",
		gender: "Male",
		symbol: "♉",
		dates: "20/4 – 20/5",
		element: "Đất",
		personality: ["Kiên định", "Chân thành", "Đáng tin cậy", "Tinh tế"],
		description:
			"Những anh chàng Kim Ngưu sở hữu nét tính cách vô cùng thân thiện, được đánh giá cao khi nói về nét tính cách của 12 cung hoàng đạo khi yêu. Kim Ngưu nam mặc dù sở hữu vẻ bề ngoài khá trầm tính và khá ít nói nhưng thực chất sâu bên trong con người này lại là trái tim trẻ con rất “mong manh”. Họ thường có xu hướng bộc lộ nét “ấu trĩ” để thu hút crush của mình.",
	},

	// 3
	{
		name: "Kim Ngưu",
		gender: "Female",
		symbol: "♉",
		dates: "20/4 – 20/5",
		element: "Đất",
		personality: ["Dịu dàng", "Chân thành", "Đảm đang", "Kiên trì"],
		description:
			"Nhắc đến tính cách 12 cung hoàng đạo tinh tế và dịu dàng chắc chắn phải đề cập đến cái tên Kim Ngưu nữ. Họ đề cao sự chính nghĩa và thích giúp đỡ những người xung quanh. Kim Ngưu nữ dễ bị thu hút bởi chàng trai truyền thống, nam tính. Họ rất biết cách chiều chuộng người yêu và dành những tình cảm, hành động ngọt ngào để “sưởi ấm” trái tim của đối phương.",
	},

	// 4
	{
		name: "Song Tử",
		gender: "Male",
		symbol: "♊",
		dates: "21/5 - 21/6",
		element: "Khí",
		personality: ["Thông minh", "Hài hước", "Hoạt bát", "Linh hoạt"],
		description:
			"Tính cách 12 cung hoàng đạo khéo léo nhất phải gọi tên chàng trai Song Tử. Có thể nói, những bạn nam thuộc cung này rất biết cách ăn nói nên dễ khiến cho đối phương có cảm giác rằng Song Tử đang theo đuổi họ. Do đó, cung này cũng được nhận xét là khá đào hoa trong tình yêu. Song Tử nam rất thích làm những điều lãng mạn cho người yêu nhưng đôi khi lại thay đổi tính khí một cách thất thường.",
	},

	// 5
	{
		name: "Song Tử",
		gender: "Female",
		symbol: "♊",
		dates: "21/5 - 21/6",
		element: "Khí",
		personality: ["Hoạt bát", "Thông minh", "Duyên dáng", "Sáng tạo"],
		description:
			"Nữ nhân Song Tử rất hào phóng và coi trọng tình nghĩa. Đôi khi, họ cũng trở nên bốc đồng và bị đánh giá là bao đồng. Song Tử nữ khi yêu rất chân thành. Khác với bản tính đào hoa của mình thì Song Tử nữ nổi tiếng thủy chung nếu đối phương chính là “người tình trong mộng” mà họ tìm kiếm bấy lâu.",
	},

	// 6
	{
		name: "Cự Giải",
		gender: "Male",
		symbol: "♋",
		dates: "22/6 - 22/7",
		element: "Nước",
		personality: ["Ấm áp", "Chung thủy", "Quan tâm", "Che chở"],
		description:
			"12 cung hoàng đạo tính cách hoàn toàn không giống nhau, trong số đó, cung hoàng đạo nam nổi tiếng nhẹ nhàng và dịu dàng khi yêu đó chính là Cự Giải. Vẻ bề ngoài của cung hoàng đạo này có vẻ thân thiện và dễ gần nhưng trên thực tế, rất khó để tiếp xúc và kết bạn với Cự Giải nam. Mặc dù luôn thể hiện sự ân cần và chu đáo với người mình yêu nhưng Cự Giải nam đôi khi cũng rất cứng đầu, không có thiện chí khi nghe góp ý từ người khác nên dễ xảy ra các cuộc mâu thuẫn không đáng có với đối phương.",
	},

	// 7
	{
		name: "Cự Giải",
		gender: "Female",
		symbol: "♋",
		dates: "22/6 - 22/7",
		element: "Nước",
		personality: ["Tận tâm", "Yêu thương", "Chu đáo", "Nhạy cảm"],
		description:
			"Sống ẩn chính là nét tính cách đặc trưng ở cô nàng Cự Giải. Dù vậy, họ rất biết cách quan tâm, săn sóc người yêu như một người mẹ dịu dàng. Cự giải thường thiếu quyết đoán khi phải đưa ra quyết định nên thường có những hướng đi sai lầm trong tình yêu và khiến bản thân phải chịu tổn thương.",
	},

	// 8
	{
		name: "Sư Tử",
		gender: "Male",
		symbol: "♌",
		dates: "23/7 - 22/8",
		element: "Lửa",
		personality: ["Tự tin", "Hào phóng", "Trung thành", "Có trách nhiệm"],
		description:
			"12 cung hoàng đạo và tính cách của mỗi người thuộc các cung này sẽ có sự tương đồng. Do đó, bạn có thể thấy rõ ràng rằng các chàng trai có cung hoàng đạo là Sư Tử thường có vẻ ngoài mạnh mẽ, tràn đầy năng lượng và tự tin. Khi yêu, chàng trai Sư Tử bỗng chốc hóa thành “chú mèo nhỏ” mè nheo với người yêu. Họ cực kỳ biết cách chiều chuộng đối phương và yêu một cách chân thành nên họ cũng mong nhận lại được tình cảm tương xứng từ người yêu.",
	},

	// 9
	{
		name: "Sư Tử",
		gender: "Female",
		symbol: "♌",
		dates: "23/7 - 22/8",
		element: "Lửa",
		personality: ["Quyến rũ", "Tự tin", "Trung thành", "Hào phóng"],
		description:
			"Tính cách của cô nàng Sư Tử được nhiều người đánh giá cao trong tính cách 12 cung hoàng đạo bởi sự thẳng thắn và trung thực. Sư Tử nữ là tuýp người khó gần nhưng một khi đã trở thành “con mồi” trong mắt họ thì bạn sẽ được họ đối xử không khác gì một “chủ nhân” thực thụ. Khi yêu, Sư Tử thường thể hiện sự dịu dàng và nữ tính, khác với vẻ ngoài mạnh mẽ, tự tin thường ngày.",
	},

	// 10
	{
		name: "Xử Nữ",
		gender: "Male",
		symbol: "♍",
		dates: "23/8 – 22/9",
		element: "Đất",
		personality: ["Tận tâm", "Tinh tế", "Thông minh", "Chu đáo"],
		description:
			"Khó tính, cầu toàn và khéo léo có tiếng nằm trong top tính cách 12 cung hoàng đạo không thể nào không nhắc đến anh chàng Xử Nữ. Những bạn nam thuộc cung này thường khá kiệm lời, trầm tính và điềm đạm nên hiếm khi thể hiện tình cảm công khai với người mình yêu. Họ thẳng thắn trong mọi việc nên nếu bạn làm phật lòng họ thì Xử Nữ nam sẵn sàng góp ý ngay và không cần quan tâm đến cảm xúc của bạn ra sao.",
	},

	// 11
	{
		name: "Xử Nữ",
		gender: "Female",
		symbol: "♍",
		dates: "23/8 – 22/9",
		element: "Đất",
		personality: ["Thanh lịch", "Tinh tế", "Sâu sắc", "Chu đáo"],
		description:
			"Cung Xử Nữ thường nổi tiếng bởi sự thẳng tính và nghiêm túc trong cảm công việc lẫn cuộc sống hằng ngày. Nếu muốn yêu được cung hoàng đạo này, bạn cần cho họ cảm giác an toàn và tin tưởng tuyệt đối. Dù Xử Nữ nữ rất thích chiều chuộng người yêu nhưng nếu bạn có ý định phản bội họ thì xác định rằng cả đời này hai bạn sẽ trở thành kẻ thù của nhau, bởi điều này là điều kiêng kỵ đối với Xử Nữ.",
	},

	// 12
	{
		name: "Thiên Bình",
		gender: "Male",
		symbol: "♎",
		dates: "23/9 – 22/10",
		element: "Khí",
		personality: ["Duyên dáng", "Hòa nhã", "Công bằng", "Tinh tế"],
		description:
			"Thiên Bình nổi tiếng là cung hoàng đạo yêu bằng mắt. Anh chàng thường si mê người đối diện bởi vẻ đẹp kiêu sa toát lên từ con người họ. Tuy nhiên, trong tính cách 12 cung hoàng đạo thì Thiên Bình nam được nhận xét là rất thú vị và có khiếu hài hước. Nam Thiên Bình cũng biết cách quan tâm đến người mình yêu bằng những cử chỉ ấm áp, ngọt ngào..",
	},

	// 13
	{
		name: "Thiên Bình",
		gender: "Female",
		symbol: "♎",
		dates: "23/9 – 22/10",
		element: "Khí",
		personality: ["Duyên dáng", "Thanh lịch", "Công bằng", "Hòa nhã"],
		description:
			"Thú vị là hai từ diễn tả đúng nhất nét tính cách của cô nàng Thiên Bình trong tính cách 12 cung hoàng đạo. Họ biết cách ứng xử khéo léo trong giao tiếp nên dễ dàng lọt vào “mắt xanh” của nhiều anh chàng xung quanh. Tuy nhiên, Thiên Bình nữ rất kén chọn khi yêu bởi họ không muốn chịu sự tổn thương.",
	},

	// 14
	{
		name: "Thiên Yết",
		gender: "Male",
		symbol: "♏",
		dates: "23/10 - 21/11",
		element: "Nước",
		personality: ["Chung thủy", "Sâu sắc", "Mạnh mẽ", "Quyến rũ"],
		description:
			"Thiên Yết (Cung Bọ Cạp) là cung hoàng đạo sở hữu bộ óc “già trước tuổi” nên những bạn nam thuộc cung hoàng đạo này rất hiểu chuyện và hiểu tâm lý của người khác. Anh chàng cũng được nhận xét là khá chân thành và chung tình khi yêu. Thiên Yết nam coi trọng mối quan hệ của bản thân nên hiếm khi lựa chọn từ bỏ trừ khi có lý do chính đáng.",
	},

	// 15
	{
		name: "Thiên Yết",
		gender: "Female",
		symbol: "♏",
		dates: "23/10 - 21/11",
		element: "Nước",
		personality: ["Mạnh mẽ", "Chung thủy", "Đam mê", "Bí ẩn"],
		description:
			"Tính cách Thiên Yết được nhận xét là trầm nhất trong tính cách 12 của cung hoàng đạo. Các bạn nữ thuộc cung này thường rất đa nghi nên đôi khi gây ra những cuộc tranh cãi không đáng có với người yêu. Tuy nhiên, Thiên Yết nữ rất ấm áp, họ thường có những hành động ngọt ngào bất ngờ cho đối phương.",
	},

	// 16
	{
		name: "Nhân Mã",
		gender: "Male",
		symbol: "♐",
		dates: "22/11 - 21/12",
		element: "Lửa",
		personality: ["Lạc quan", "Phóng khoáng", "Nhiệt tình", "Chân thành"],
		description:
			"Nhân Mã nam được biết đến là các anh chàng có tính cách “lì lợm”, một khi đã quyết định làm gì thì dù gian khó thế nào, họ cũng sẽ hoàn thành “đến nơi, đến chốn”. Cũng giống như trong tình yêu, Nhân Mã nam không dễ dàng từ bỏ tình cảm của mình trước khó khăn và thử thách.",
	},

	// 17
	{
		name: "Nhân Mã",
		gender: "Female",
		symbol: "♐",
		dates: "22/11 - 21/12",
		element: "Lửa",
		personality: ["Tự do", "Lạc quan", "Vui vẻ", "Chân thành"],
		description:
			"Nữ Nhân Mã yêu sự tự do và không thích bị ràng buộc bởi bất kỳ thứ gì. Họ thích giúp đỡ người khác và biết trau dồi, nâng cấp bản thân khi “rơi vào lưới tình”. Đôi khi, bạn nữ thuộc cung này khá cứng đầu và ngang bướng, chỉ thích làm theo ý mình nên khiến người yêu khó chịu.",
	},

	// 18
	{
		name: "Ma Kết",
		gender: "Male",
		symbol: "♑",
		dates: "22/12 - 19/1",
		element: "Đất",
		personality: ["Trách nhiệm", "Tham vọng", "Kiên trì", "Thực tế"],
		description:
			"Trong tính cách của 12 cung hoàng đạo thì nam Ma Kết là cung sống theo kỷ luật và nguyên tắc nên những bạn nam thuộc cung này thường khá “cứng nhắc” và cố chấp khi yêu. Anh chàng còn khá kỹ tính nên đôi khi sẽ khiến người mình yêu cảm thấy khó chịu.",
	},

	// 19
	{
		name: "Ma Kết",
		gender: "Female",
		symbol: "♑",
		dates: "22/12 - 19/1",
		element: "Đất",
		personality: ["Trách nhiệm", "Kiên trì", "Đáng tin", "Chín chắn"],
		description:
			"Ma Kết nữ rất biết cách chu toàn cho mọi việc trong cuộc sống lẫn công việc. Mặc dù nổi tiếng là cung hoàng đạo có tính cách kỹ tính và kiên định trong tính cách 12 cung hoàng đạo nhưng cô nàng rất dễ bị “chi phối” khi yêu thật lòng. Họ dễ đánh mất bản thân chỉ để theo đuổi người mà họ cho rằng là “hoàng tử bạch mã” của mình.",
	},

	// 20
	{
		name: "Bảo Bình",
		gender: "Male",
		symbol: "♒",
		dates: "20/1 - 18/2",
		element: "Khí",
		personality: ["Sáng tạo", "Độc lập", "Thông minh", "Nhân đạo"],
		description:
			"Bảo Bình nam là cung hoàng đạo có tính cách trầm tính, họ không thích nhận được sự chú ý từ quá nhiều người. Khi yêu thật lòng, nam Bảo Bình thường thể hiện cách hành động quan tâm, chăm sóc và chiều chuộng người yêu như một em bé chính hiệu.",
	},

	// 21
	{
		name: "Bảo Bình",
		gender: "Female",
		symbol: "♒",
		dates: "20/1 - 18/2",
		element: "Khí",
		personality: ["Độc lập", "Thân thiện", "Sáng tạo", "Duy tâm"],
		description:
			"Hiền hòa, thanh lịch là những nét đẹp dùng để miêu tả tính cách của cô nàng Bảo Bình. Họ biết cách lắng nghe và đưa ra lời khuyên nên là chỗ dựa “tinh thần” vững chắc của người yêu. Khi yêu thật lòng, họ thường “giả ngơ” không quan tâm người yêu nhưng lại thầm lặng làm những hành động ngọt ngào cho đối phương.",
	},

	// 22
	{
		name: "Song Ngư",
		gender: "Male",
		symbol: "♓",
		dates: "19/2 - 20/3",
		element: "Nước",
		personality: ["Nhạy cảm", "Sáng tạo", "Trực giác", "Lãng mạn"],
		description:
			"Song Ngư nam nổi tiếng là cung hoàng đạo có trái tim vị tha trong tính cách 12 cung hoàng đạo. Họ rất sợ hành động và lời nói của bản thân khiến người khác bị tổn thương. Trong tình yêu, anh chàng giỏi lắng nghe, biết chăm sóc và thay đổi bản thân theo hướng tích cực để phù hợp với người mà họ yêu.",
	},

	// 23

	{
		name: "Song Ngư",
		gender: "Female",
		symbol: "♓",
		dates: "19/2 - 20/3",
		element: "Nước",
		personality: ["Lãng mạn", "Dịu dàng", "Mơ mộng", "Tinh tế"],
		description:
			"Hồn nhiên và giàu lòng nhân ái là nét tính cách được tìm thấy ở nữ Song Ngư. Dù là con gái nhưng nữ Song Ngư lại nổi tiếng là cung hoàng đạo “ga lăng” nhất trong tính cách 12 cung hoàng đạo. Đây là nữ nhân chung tình khi yêu nên rất dễ trở nên mù quáng, không phân biệt đúng sai, theo đuổi tình yêu “không hồi kết” của mình.",
	},
];


const Info = ({ user }) => {
	const birthYear = user.birthday.split("-")[0];
	const userAge = currentYear - birthYear;
	const zodiacIndex = user.zodiac - 1;
	const userZodiac = ZodiacSigns[zodiacIndex];
  return (
	<section className="pt-16 bg-blueGray-50 vh-100 h-full w-4/10 ">
	  <div className=" px-4 mx-auto min-w-[300px] pt-16">
		  <div className="px-6  ">
			<div className="flex flex-wrap justify-center">
			  <div className="w-full px-4 flex justify-center">
				<div className="relative">
				  <img
					alt="Profile"
					src={user.avatar}
							  className="shadow-xl rounded-full h-40 w-40 object-cover border-none -mt-16"

				  />
				</div>
			  </div>
			  <div className="w-full px-4 text-center">
				
			  </div>
			</div>
			<div className="text-center mt-12">
			  <h3 className="text-xl font-semibold leading-normal mb-4 text-blueGray-700">
				{user.username}
			  </h3>
			  <div className="text-sm flex justify-center gap-2 leading-normal mt-0 mb-12 text-blueGray-400 font-bold uppercase ">
			  <i class="fi fi-sr-marker"></i>
			  {user.location}
			  </div>
			  <div className="mb-2 text-blueGray-600  flex justify-center mb-4 gap-2">
			  <i class="fi fi-sr-envelope"></i>
				{user.username}
			  </div>
			  <div className="mb-4 text-blueGray-600 flex gap-2 justify-center">
			  <div className="w-5">
				<img id="uicons__detail-img" src={leo} alt="" title="" className="img-small" />
			  </div>
				{userZodiac.name}
			  </div>
			  <div className="mb-4 text-blueGray-600 flex gap-2 justify-center">
			  <div className="w-5">
			  <img id="uicons__detail-img" src={age} alt="" title="" className="img-small" />
			  </div>
				{userAge}
			  </div>
			</div>
			<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
			  <div className="flex flex-wrap justify-center">
				<div className="w-full lg:w-9/12 px-4">
				  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
					{user.quote}
				  </p>
				</div>
			  </div>
			</div>
			

		  </div>
	  </div>
  
	</section>
  );
};

export default Info;