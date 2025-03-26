import {
	TbZodiacAries,
	TbZodiacAquarius,
	TbZodiacCancer,
	TbZodiacCapricorn,
	TbZodiacGemini,
	TbZodiacLeo,
	TbZodiacLibra,
	TbZodiacPisces,
	TbZodiacSagittarius,
	TbZodiacScorpio,
	TbZodiacTaurus,
	TbZodiacVirgo,
} from "react-icons/tb";

export const zodiacInfo = [
	{
		id: 1,
		sex: "male",
		sign: "Aries",
		icon: <TbZodiacAries />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Sơ lược về cung bạch dương" },
					{
						type: "text",
						value:
							"Cung Bạch Dương (Aries) còn được gọi là cung Dương Cưu là cung chiêm tinh đầu tiên trong vòng hoàng đạo. Cung này được bảo hộ bởi sao Hỏa – vị thần chiến tranh trong thần thoại Hy Lạp. Cung Bạch Dương bắt nguồn từ truyền thuyết về con cừu vàng Aries - biểu tượng của sự bảo vệ và lòng dũng cảm. Vì vậy, biểu tượng của cung này là một con cừu (cũng có khi được gọi là dê). Người thuộc cung Bạch Dương có sinh nhật rơi vào khoảng thời gian từ 21/3 – 19/4",
					},
					{ type: "image", value: "./src/assets/12_zodiac.svg" },
					{
						type: "text",
						value:
							"Biểu tượng của cung Bạch Dương là con chiên. Con chiên thường được miêu tả như một loài động vật mạnh mẽ, có khả năng chịu đựng và quyết tâm. Điều này phản ánh tính cách của người thuộc cung Bạch Dương. Họ thích đảm đương vai trò lãnh đạo và sẵn lòng đứng lên bảo vệ những người yếu đuối.",
					},
					{ type: "image", value: "./src/assets/Aries_logo.svg" },
				],
			},
			{
				label: "Tính cách",
				content: [
					{
						type: "text",
						value:
							"Bạn là những người có khí chất, có thành tựu và mạnh mẽ. Những người này thẳng thắn, bộc trực, dám lăn xả và theo đuổi những lý tưởng riêng của mình. ",
					},
					{
						type: "text",
						value:
							"Bạn có thể không quá “ngầu” như Bọ Cạp hay lãng tử tiêu sái như Thiên Bình nhưng chàng toát lên vẻ hoang dã, mạnh mẽ, lúc nào cũng có chút tinh nghịch, trẻ con nhưng lại rất tin cậy.",
					},
					{ type: "image", value: "./src/assets/Aries_logo.svg" },
					{
						type: "text",
						value:
							"Sự nhiệt tình của bạn thể hiện rõ khi dành tâm huyết vào việc giúp đỡ người khác. Điều đó khiến anh chàng được mọi người yêu quý và kính trọng.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{
						type: "text",
						value:
							"Trong tình yêu, Bạch Dương là những người yêu rất nồng nhiệt, mãnh liệt và chân thành. Họ luôn bộc lộ sự ấm áp, quan tâm và chăm sóc người yêu rất chu đáo. Họ mạnh mẽ, quyết đoán và không ngại bày tỏ tình cảm.",
					},
					{
						type: "text",
						value:
							"Bạn không thích sự ràng buộc, gò bó hay giả dối trong mối quan hệ. Bạch Dương cũng rất thẳng thắn, chân thành, nghĩ gì nói đó nên là người rất dễ đoán bởi họ không hề mưu mô, toan tính với ai cả",
					},
					{
						type: "image",
						value: "./src/assets/purple_blue_aries_logo_hd_aries-1920x1080.jpg",
					},
					{
						type: "text",
						value:
							"Tuy nhiên, bạch dương cũng có những khuyết điểm trong tình yêu như thiếu nhẫn nại, hơi ba hoa và cả thèm chóng chán. Bạn phần thô lỗ, kiêu căng, luôn tin mình là đúng và bỏ ngoài tai lời khuyên của người khác. Bạn cũng có xu hướng ghen tuông và chiếm hữu cao khiến người yêu cảm thấy bị áp bức.",
					},
					{
						type: "text",
						value:
							"Khi nam Bạch Dương yêu, họ thường rất tự tin và quyết đoán. Các anh chàng sẽ tỏ ra quan tâm, bảo vệ người yêu và thường thể hiện tình yêu bằng cách hành động hết sức chân thành. Sự lãng mạn và đam mê của họ thường là điểm nhấn trong mối quan hệ. Tuy nhiên, họ cũng có thể thể hiện sự cứng đầu, đôi khi dẫn đến xung đột trong tình yêu.",
					},
				],
			},
		],
	},
	{
		id: 2,
		sex: "female",
		sign: "Aries",
		icon: <TbZodiacAries />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{
						type: "h2",
						value: "Năng lượng mạnh mẽ và tiên phong",
					},
					{
						type: "text",
						value:
							"Nữ Bạch Dương luôn xuất hiện với một nguồn năng lượng dồi dào, họ thích những hoạt động sôi nổi và không bao giờ chịu ngồi yên một chỗ. Chính vì sự năng động này mà họ dễ dàng thu hút sự chú ý của những người xung quanh. Họ luôn sẵn sàng tham gia vào những thử thách mới, không ngại khó khăn hay thất bại.",
					},
					{
						type: "image",
						value: "./src/assets/12-cung-hoang-dao-thang-sinh-1.jpg",
					},
					{
						type: "h2",
						value: "Tính cách bốc đồng nhưng chân thành",
					},
					{
						type: "text",
						value:
							"Vì thuộc nguyên tố Lửa, Bạch Dương có tính cách khá bốc đồng, đôi khi thiếu kiên nhẫn và dễ nổi nóng. Tuy nhiên, họ lại rất chân thành và thẳng thắn, luôn thể hiện rõ ràng suy nghĩ của mình. Họ không thích sự vòng vo, càng ghét sự giả dối và mưu mô. Một khi đã đặt niềm tin vào ai đó, họ sẽ hết lòng vì người ấy. Nhưng cũng vì tính thẳng thắn này mà đôi lúc họ có thể làm tổn thương người khác mà không nhận ra.",
					},
					{
						type: "image",
						value: "./src/assets/purple_blue_aries_logo_hd_aries-1920x1080.jpg",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Năng động và tràn đầy nhiệt huyết" },
					{
						type: "text",
						value:
							"Nữ Bạch Dương luôn xuất hiện với một nguồn năng lượng dồi dào, họ thích những hoạt động sôi nổi và không bao giờ chịu ngồi yên một chỗ. Chính vì sự năng động này mà họ dễ dàng thu hút sự chú ý của những người xung quanh. Họ luôn sẵn sàng tham gia vào những thử thách mới, không ngại khó khăn hay thất bại.",
					},
					{
						type: "h2",
						value: "Thẳng thắn và bộc trực",
					},
					{
						type: "text",
						value:
							"Khác với nhiều cô gái dịu dàng, nữ Bạch Dương có cách nói chuyện rất thẳng thắn, đôi khi có phần bộc trực. Họ không thích vòng vo mà luôn nói lên suy nghĩ của mình một cách rõ ràng. Chính vì sự thẳng thắn này, họ dễ tạo được sự tin tưởng từ người khác nhưng đôi lúc cũng khiến họ vướng vào rắc rối vì những lời nói quá trực tiếp.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Mạnh mẽ nhưng cần sự quan tâm" },
					{
						type: "text",
						value:
							"Nữ Bạch Dương trong tình yêu thường rất mạnh mẽ, độc lập nhưng thực chất lại luôn mong muốn được quan tâm và che chở. Họ thích một người có thể hiểu và đồng hành cùng họ, sẵn sàng chấp nhận cá tính mạnh mẽ của họ. Dù bề ngoài có vẻ tự tin, nhưng sâu thẳm bên trong, họ vẫn có những lúc yếu mềm.",
					},
					{
						type: "h2",
						value: "Dễ chán nếu tình yêu thiếu sự mới mẻ",
					},
					{
						type: "text",
						value:
							"Vì bản tính thích khám phá và trải nghiệm, nữ Bạch Dương dễ cảm thấy nhàm chán nếu mối quan hệ trở nên quá đơn điệu. Họ cần một người biết cách tạo ra những điều thú vị, làm mới tình yêu để duy trì sự hứng khởi. Nếu cảm thấy đối phương quá thụ động hay thiếu sự nhiệt huyết, họ sẽ nhanh chóng mất đi cảm xúc.",
					},
				],
			},
		],
	},
	{
		id: 3,
		sex: "male",
		sign: "Taurus",
		icon: <TbZodiacTaurus />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nam Kim Ngưu thuộc nhóm đất, biểu tượng là con bò đực mạnh mẽ. Họ có tính cách bền bỉ, kiên định và luôn theo đuổi mục tiêu đến cùng. Trong cuộc sống, họ thường tìm kiếm sự ổn định và không thích thay đổi đột ngột. Sự cẩn trọng giúp họ tránh được rủi ro, nhưng đôi khi cũng làm họ bỏ lỡ những cơ hội bất ngờ. Họ yêu thích cuộc sống bình yên, không ưa ồn ào hay những điều quá mới mẻ.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Kiên nhẫn và thực tế" },
					{
						type: "text",
						value:
							"Nam Kim Ngưu luôn tiếp cận mọi việc một cách từ tốn, không vội vàng hay hấp tấp. Họ đề cao tính thực tế, luôn suy nghĩ kỹ trước khi hành động. Chính sự kiên nhẫn này giúp họ đạt được thành công trong công việc và cuộc sống. Dù đôi lúc họ có thể bị xem là bảo thủ, nhưng họ tin rằng cách tiếp cận chậm mà chắc là con đường an toàn nhất.",
					},
					{
						type: "h2",
						value: "Trung thành và đáng tin cậy",
					},
					{
						type: "text",
						value:
							"Đối với bạn bè và người thân, Kim Ngưu nam là người có thể tin tưởng tuyệt đối. Họ luôn giữ lời hứa và không bao giờ phản bội người khác. Trong tình bạn, họ là chỗ dựa vững chắc, luôn sẵn sàng giúp đỡ khi cần thiết. Tuy nhiên, nếu ai đó phản bội lòng tin của họ, rất khó để họ tha thứ và quên đi chuyện cũ.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và nghiêm túc" },
					{
						type: "text",
						value:
							"Khi yêu, Kim Ngưu nam không phải là người lãng mạn hay thích thể hiện bằng lời nói. Thay vào đó, họ thể hiện tình cảm bằng hành động chân thành. Một khi đã xác định tình cảm với ai đó, họ sẽ gắn bó lâu dài và rất khó thay đổi. Đối với họ, tình yêu là sự cam kết và bảo vệ, chứ không chỉ là cảm xúc thoáng qua.",
					},
					{
						type: "h2",
						value: "Thích sự ổn định trong tình yêu",
					},
					{
						type: "text",
						value:
							"Họ không thích những mối quan hệ hời hợt hay thay đổi liên tục. Khi yêu ai, họ luôn hướng tới một tương lai lâu dài và ổn định. Họ không dễ dàng bị hấp dẫn bởi những mối quan hệ thoáng qua, mà luôn tìm kiếm một người có thể cùng họ xây dựng gia đình.",
					},
				],
			},
		],
	},
	{
		id: 4,
		sex: "female",
		sign: "Taurus",
		icon: <TbZodiacTaurus />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nữ Kim Ngưu là những cô gái mạnh mẽ, kiên định và có tư duy thực tế. Họ không thích những điều viển vông, luôn đặt ra kế hoạch rõ ràng cho cuộc sống. Trong công việc và các mối quan hệ, họ luôn giữ vững lập trường và không dễ bị ảnh hưởng bởi người khác. Họ yêu thích những giá trị truyền thống và luôn hướng tới sự ổn định.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Độc lập và mạnh mẽ" },
					{
						type: "text",
						value:
							"Phụ nữ Kim Ngưu không phải là người dễ bị lung lay hay phụ thuộc vào người khác. Họ tự tin vào khả năng của mình và luôn cố gắng tự làm mọi thứ. Dù cuộc sống có khó khăn đến đâu, họ cũng không dễ dàng bỏ cuộc hay dựa dẫm vào người khác.",
					},
					{
						type: "h2",
						value: "Yêu thích sự ổn định",
					},
					{
						type: "text",
						value:
							"Họ không thích những thay đổi quá đột ngột hay cuộc sống quá nhiều biến động. Đối với họ, một cuộc sống bình yên và có kế hoạch rõ ràng là điều quan trọng nhất. Vì thế, họ luôn cố gắng xây dựng nền tảng vững chắc cho tương lai.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Tình yêu bền bỉ và chân thành" },
					{
						type: "text",
						value:
							"Nữ Kim Ngưu không dễ dàng yêu một ai đó, nhưng khi đã yêu, họ rất chung thủy. Họ không thích những trò chơi tình cảm mà luôn mong muốn một mối quan hệ nghiêm túc. Họ sẵn sàng dành thời gian và công sức để vun đắp tình yêu.",
					},
					{
						type: "h2",
						value: "Đòi hỏi sự an toàn trong tình yêu",
					},
					{
						type: "text",
						value:
							"Họ cần một người có thể mang lại cho họ cảm giác an toàn và ổn định. Những người quá bay bổng hoặc thiếu trách nhiệm thường không thể khiến họ yên tâm. Vì thế, họ thường bị thu hút bởi những người chững chạc, có kế hoạch rõ ràng cho tương lai.",
					},
				],
			},
		],
	},
	{
		id: 5,
		sex: "male",
		sign: "Gemini",
		icon: <TbZodiacGemini />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nam Song Tử thuộc nguyên tố Khí, biểu tượng là cặp song sinh, thể hiện tính cách hai mặt của họ. Họ là những người năng động, thông minh, linh hoạt và luôn khao khát khám phá thế giới xung quanh. Với trí tuệ sắc bén và khả năng giao tiếp xuất sắc, họ có thể thích nghi nhanh chóng với mọi môi trường. Tuy nhiên, đôi khi sự thay đổi quá nhanh khiến họ trở nên khó đoán và thiếu ổn định trong cuộc sống.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Linh hoạt và dễ thích nghi" },
					{
						type: "text",
						value:
							"Không giống như những cung hoàng đạo cứng nhắc, Song Tử nam có khả năng thích nghi tuyệt vời. Họ có thể thay đổi cách suy nghĩ và hành động để phù hợp với hoàn cảnh. Dù gặp khó khăn, họ vẫn có thể tìm ra giải pháp một cách nhanh chóng. Tuy nhiên, sự linh hoạt đôi khi cũng khiến họ thiếu kiên trì và dễ bị cuốn theo những thứ mới mẻ.",
					},
					{ type: "h2", value: "Thông minh và sáng tạo" },
					{
						type: "text",
						value:
							"Nam Song Tử có trí tuệ nhạy bén, họ tiếp thu nhanh và luôn đưa ra những ý tưởng sáng tạo độc đáo. Họ yêu thích việc học hỏi và không ngừng tìm kiếm kiến thức mới. Dù trong công việc hay cuộc sống, họ luôn có cách nhìn nhận vấn đề từ nhiều góc độ khác nhau. Chính điều này giúp họ trở thành những nhà lãnh đạo hoặc người truyền cảm hứng giỏi.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Lãng mạn và quyến rũ" },
					{
						type: "text",
						value:
							"Nam Song Tử có sức hút đặc biệt nhờ khả năng giao tiếp khéo léo. Họ dễ dàng tạo ra những cuộc trò chuyện thú vị và khiến người khác bị thu hút. Khi yêu, họ thích mang đến sự bất ngờ và lãng mạn, làm cho mối quan hệ trở nên thú vị và đầy màu sắc.",
					},
					{ type: "h2", value: "Thay đổi nhanh trong tình cảm" },
					{
						type: "text",
						value:
							"Dù dễ yêu nhưng nam Song Tử cũng dễ thay đổi. Họ thích sự tự do và không muốn bị ràng buộc quá sớm trong một mối quan hệ. Điều này khiến họ đôi khi bị xem là thiếu nghiêm túc trong tình yêu. Tuy nhiên, nếu gặp được người thực sự phù hợp, họ sẽ trở nên chung thủy và sẵn sàng vun đắp cho tương lai.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 6,
		sex: "female",
		sign: "Gemini",
		icon: <TbZodiacGemini />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nữ Song Tử là những cô gái hoạt bát, thông minh và đầy sức sống. Họ có tính cách linh hoạt, luôn tò mò về thế giới xung quanh và thích thử nghiệm những điều mới lạ. Với sự nhạy bén và khả năng giao tiếp tốt, họ thường được nhiều người yêu quý. Tuy nhiên, đôi khi họ cũng có xu hướng thiếu kiên nhẫn và dễ chán khi phải gò bó vào một khuôn khổ nhất định.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Hoạt bát và vui vẻ" },
					{
						type: "text",
						value:
							"Nữ Song Tử luôn mang đến nguồn năng lượng tích cực cho mọi người xung quanh. Họ thích kết nối với mọi người, luôn cởi mở và dễ bắt chuyện. Ở đâu có họ, ở đó có sự vui vẻ và không khí sôi động. Điều này giúp họ luôn được yêu mến trong các mối quan hệ xã hội.",
					},
					{ type: "h2", value: "Sáng tạo và thích sự mới lạ" },
					{
						type: "text",
						value:
							"Cô gái Song Tử không thích sự đơn điệu, họ luôn tìm kiếm những điều mới mẻ để làm cho cuộc sống thú vị hơn. Họ có óc sáng tạo tuyệt vời và luôn đưa ra những ý tưởng độc đáo. Tuy nhiên, chính vì thích thử thách mới, họ có thể nhanh chán nếu một việc trở nên nhàm chán và thiếu sự đổi mới.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Yêu tự do và không thích sự ràng buộc" },
					{
						type: "text",
						value:
							"Nữ Song Tử không thích những mối quan hệ quá kiểm soát hay gò bó. Họ muốn có không gian riêng để theo đuổi những sở thích và đam mê của mình. Nếu một người đàn ông cố gắng áp đặt hoặc kiểm soát họ, rất có thể họ sẽ nhanh chóng rời xa.",
					},
					{ type: "h2", value: "Dễ thay đổi trong tình yêu" },
					{
						type: "text",
						value:
							"Họ có thể rất say mê một ai đó trong thời gian ngắn, nhưng cũng dễ dàng mất hứng thú nếu mối quan hệ trở nên nhạt nhẽo. Họ cần một người có thể giữ cho tình yêu luôn tươi mới và không bao giờ nhàm chán. Một mối quan hệ lý tưởng với họ phải đầy sự bất ngờ, sáng tạo và vui vẻ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 7,
		sex: "male",
		sign: "Cancer",
		icon: <TbZodiacCancer />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Cự Giải nam" },
					{
						type: "text",
						value:
							"Nam Cự Giải là những người có trái tim ấm áp, giàu tình cảm và rất quan tâm đến gia đình. Họ có vẻ ngoài trầm lặng nhưng bên trong lại là một tâm hồn sâu sắc và nhạy cảm. Với bản tính sống nội tâm, họ thường che giấu cảm xúc thật của mình và chỉ bộc lộ với những người họ tin tưởng. Họ luôn mong muốn một cuộc sống bình yên, ổn định và đề cao giá trị của gia đình. Tuy nhiên, sự nhạy cảm đôi khi khiến họ dễ bị tổn thương và khó quên đi những chuyện buồn trong quá khứ.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Tình cảm và chân thành" },
					{
						type: "text",
						value:
							"Nam Cự Giải luôn đối xử với mọi người bằng sự chân thành và quan tâm sâu sắc. Họ coi trọng các mối quan hệ trong cuộc sống, đặc biệt là gia đình và những người thân yêu. Với trái tim ấm áp, họ sẵn sàng giúp đỡ và bảo vệ những người họ yêu thương mà không cần bất kỳ điều kiện gì.",
					},
					{ type: "h2", value: "Nhạy cảm và dễ bị tổn thương" },
					{
						type: "text",
						value:
							"Họ có trực giác mạnh mẽ và rất nhạy cảm với cảm xúc của người khác. Điều này giúp họ dễ dàng đồng cảm và thấu hiểu người xung quanh. Tuy nhiên, mặt trái của sự nhạy cảm là họ dễ bị tổn thương bởi những lời nói hay hành động vô tình của người khác. Nếu bị phản bội, họ sẽ khó quên và rất lâu mới có thể mở lòng trở lại.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và nghiêm túc" },
					{
						type: "text",
						value:
							"Khi yêu, Cự Giải nam rất nghiêm túc và luôn hướng tới một mối quan hệ bền vững. Họ không thích những mối tình thoáng qua mà mong muốn tìm được một người có thể gắn bó lâu dài. Một khi đã yêu, họ sẽ dành tất cả sự quan tâm và chăm sóc cho đối phương.",
					},
					{ type: "h2", value: "Cần một người mang lại cảm giác an toàn" },
					{
						type: "text",
						value:
							"Vì là người dễ bị tổn thương, Cự Giải nam cần một người yêu biết trân trọng và thấu hiểu họ. Họ không thích sự mập mờ hay những mối quan hệ không rõ ràng. Một tình yêu chân thành, ổn định sẽ giúp họ cảm thấy an toàn và sẵn sàng mở lòng.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 8,
		sex: "female",
		sign: "Cancer",
		icon: <TbZodiacCancer />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Cự Giải nữ" },
					{
						type: "text",
						value:
							"Nữ Cự Giải là mẫu người dịu dàng, tinh tế và rất tình cảm. Họ luôn đặt gia đình và những người thân yêu lên hàng đầu, coi đó là nguồn động lực lớn nhất trong cuộc sống. Với vẻ ngoài nhẹ nhàng, họ thu hút người khác bởi sự ấm áp và ân cần. Tuy nhiên, họ khá nhạy cảm và đôi khi dễ bị cảm xúc chi phối, khiến họ trở nên mong manh trong tình yêu.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Hiền lành và chu đáo" },
					{
						type: "text",
						value:
							"Nữ Cự Giải là những người phụ nữ hiền lành và luôn biết cách quan tâm đến người khác. Họ có trái tim nhân hậu và luôn sẵn sàng giúp đỡ mọi người xung quanh. Điều này khiến họ trở thành người bạn đồng hành tuyệt vời trong mọi mối quan hệ.",
					},
					{ type: "h2", value: "Nhạy cảm và dễ xúc động" },
					{
						type: "text",
						value:
							"Họ rất nhạy cảm với những lời nói hay hành động của người khác. Đôi khi, chỉ một chuyện nhỏ cũng có thể khiến họ buồn và suy nghĩ rất nhiều. Họ có xu hướng che giấu cảm xúc thật của mình và chỉ chia sẻ với những người họ thực sự tin tưởng.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Tận tâm và hết lòng vì tình yêu" },
					{
						type: "text",
						value:
							"Khi yêu, nữ Cự Giải luôn dành trọn tình cảm cho người mình yêu. Họ thích chăm sóc và quan tâm đối phương từng chút một. Họ luôn mong muốn có một mối quan hệ bền vững và lâu dài, chứ không phải những cuộc tình thoáng qua.",
					},
					{ type: "h2", value: "Cần một bờ vai vững chắc" },
					{
						type: "text",
						value:
							"Do bản tính nhạy cảm, nữ Cự Giải cần một người đàn ông đủ mạnh mẽ và đáng tin cậy để làm chỗ dựa. Họ không thích những người quá vô tâm hoặc không quan tâm đến cảm xúc của họ. Một tình yêu chân thành, đầy sự sẻ chia chính là điều mà họ mong muốn nhất.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 9,
		sex: "male",
		sign: "Leo",
		icon: <TbZodiacLeo />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nam Sư Tử sinh ra đã mang trong mình khí chất của một vị vua. Họ mạnh mẽ, quyết đoán và luôn thích đứng ở vị trí trung tâm của sự chú ý. Với lòng tự tin và tham vọng, họ không ngại theo đuổi những điều vĩ đại trong cuộc sống. Tuy nhiên, chính vì sự kiêu hãnh này mà đôi khi họ trở nên bảo thủ, không chịu lắng nghe ý kiến của người khác. Dù vậy, nam Sư Tử vẫn luôn là người có tấm lòng rộng lượng, sẵn sàng giúp đỡ những ai cần đến mình.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Mạnh mẽ và quyết đoán" },
					{
						type: "text",
						value:
							"Anh chàng Sư Tử luôn có chính kiến riêng và không dễ dàng bị lung lay bởi những lời nói xung quanh. Khi đã đặt ra mục tiêu, họ sẽ kiên trì theo đuổi đến cùng, bất kể khó khăn thử thách. Họ cũng là những người lãnh đạo bẩm sinh, biết cách dẫn dắt người khác đi theo mình. Tuy nhiên, đôi khi sự quyết đoán này lại biến thành bảo thủ, khiến họ khó chấp nhận sai lầm của bản thân.",
					},
					{ type: "h2", value: "Hào phóng và ấm áp" },
					{
						type: "text",
						value:
							"Dù mạnh mẽ, nhưng nam Sư Tử cũng rất giàu tình cảm và luôn quan tâm đến những người xung quanh. Họ sẵn sàng giúp đỡ bạn bè mà không cần nhận lại điều gì. Trong những cuộc vui, họ luôn là người hào phóng nhất, không tiếc tiền để đem lại niềm vui cho mọi người. Chính sự rộng lượng này giúp họ có rất nhiều bạn bè trung thành.",
					},
					{ type: "h2", value: "Tự tin nhưng có phần kiêu ngạo" },
					{
						type: "text",
						value:
							"Sư Tử nam luôn tự tin về khả năng của bản thân, đôi khi đến mức kiêu ngạo. Họ thích nhận được sự ngưỡng mộ và khen ngợi từ những người xung quanh. Tuy nhiên, nếu không kiểm soát tốt, sự kiêu hãnh này có thể khiến họ trở nên hống hách và khó gần. Học cách khiêm tốn sẽ giúp nam Sư Tử trở nên hoàn thiện hơn.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Mạnh mẽ và chủ động trong tình yêu" },
					{
						type: "text",
						value:
							"Khi thích một ai đó, nam Sư Tử sẽ không ngần ngại bày tỏ tình cảm của mình. Họ thích theo đuổi hơn là được theo đuổi, luôn muốn mình là người kiểm soát mối quan hệ. Những cử chỉ ga lăng, sự quan tâm chu đáo của họ dễ dàng khiến đối phương cảm động.",
					},
					{ type: "h2", value: "Chung thủy nhưng cũng thích được ngưỡng mộ" },
					{
						type: "text",
						value:
							'Khi yêu, Sư Tử rất chân thành và chung thủy, không dễ dàng thay lòng đổi dạ. Tuy nhiên, họ vẫn thích được người khác ngưỡng mộ và tán dương, nên đôi khi sẽ có chút "thả thính" vô hại. Người yêu của họ cần có sự bao dung và tinh tế để hiểu được tính cách này.',
					},
					{ type: "h2", value: "Yêu cầu cao với đối phương" },
					{
						type: "text",
						value:
							"Nam Sư Tử muốn ở bên một người không chỉ đẹp về ngoại hình mà còn có trí tuệ và bản lĩnh. Họ không thích những người quá yếu đuối hay dựa dẫm quá nhiều vào mình. Một người phụ nữ độc lập nhưng vẫn biết tôn trọng cái tôi của họ sẽ là lựa chọn lý tưởng nhất.",
					},
				],
			},
		],
	},
	{
		id: 10,
		sex: "female",
		sign: "Leo",
		icon: <TbZodiacLeo />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung hoàng đạo" },
					{
						type: "text",
						value:
							"Nữ Sư Tử là hiện thân của sự mạnh mẽ, cá tính và kiêu hãnh. Họ sở hữu một phong thái tự tin, đầy lôi cuốn, luôn biết cách khiến mình nổi bật giữa đám đông. Dù có vẻ ngoài mạnh mẽ, họ vẫn là những người phụ nữ có trái tim ấm áp và luôn sẵn sàng bảo vệ những người mình yêu thương. Tuy nhiên, sự độc lập của họ đôi khi khiến người khác e dè, nhất là trong chuyện tình cảm.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Mạnh mẽ và kiêu hãnh" },
					{
						type: "text",
						value:
							": Nữ Sư Tử không bao giờ chấp nhận sự yếu đuối hay bị người khác kiểm soát. Họ luôn muốn làm chủ cuộc sống của mình, tự quyết định mọi thứ mà không cần nhờ vả ai. Dù gặp khó khăn, họ cũng sẽ tự tìm cách vượt qua mà không muốn người khác thương hại.",
					},
					{ type: "h2", value: "Hào phóng và chân thành" },
					{
						type: "text",
						value:
							"Giống như nam Sư Tử, phụ nữ cung này cũng rất hào phóng, sẵn sàng giúp đỡ bạn bè khi cần. Họ không thích sự giả tạo hay ghen tị, luôn sống chân thành và hết lòng vì những người thân yêu. Sự chân thành này giúp họ có nhiều mối quan hệ đáng tin cậy.",
					},
					{ type: "h2", value: "Có cá tính mạnh mẽ và đôi chút bướng bỉnh" },
					{
						type: "text",
						value:
							"Nữ Sư Tử có chính kiến riêng và không dễ dàng bị thuyết phục. Một khi đã quyết định điều gì, họ sẽ làm đến cùng mà không cần ai góp ý. Tuy nhiên, đôi khi sự cứng đầu này lại khiến họ khó nhận ra sai lầm của mình.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{
						type: "h2",
						value: "Nữ Sư Tử trong tình yêu rất mãnh liệt và chung thủy",
					},
					{
						type: "text",
						value:
							"Khi yêu, họ sẽ yêu hết mình, dành toàn bộ tâm huyết cho người ấy. Họ không chấp nhận sự phản bội và luôn muốn có một mối quan hệ rõ ràng, nghiêm túc. Nếu phát hiện đối phương không thành thật, họ sẵn sàng rời đi mà không hối tiếc.",
					},
					{ type: "h2", value: "Thích được tôn trọng trong tình yêu" },
					{
						type: "text",
						value:
							"Với cá tính mạnh mẽ, nữ Sư Tử không thích bị kiểm soát hay áp đặt. Họ muốn được đối phương xem như một người bạn đồng hành, không phải một người phụ thuộc. Những ai có tư tưởng gia trưởng sẽ khó mà chinh phục được họ.",
					},
					{ type: "h2", value: "Có tiêu chuẩn cao đối với người yêu" },
					{
						type: "text",
						value:
							"Phụ nữ Sư Tử không dễ dàng bị hấp dẫn bởi vẻ bề ngoài, họ đánh giá cao những người đàn ông có chí hướng và sự nghiệp vững chắc. Một người đàn ông tự tin, thông minh và biết cách trân trọng họ sẽ là lựa chọn hoàn hảo nhất.",
					},
				],
			},
		],
	},
	{
		id: 11,
		sex: "male",
		sign: "Virgo",
		icon: <TbZodiacVirgo />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Xử Nữ nam" },
					{
						type: "text",
						value:
							"Nam Xử Nữ là người cầu toàn, tỉ mỉ và luôn chú trọng đến từng chi tiết nhỏ trong cuộc sống. Họ thường có tư duy phân tích sắc bén, thích tổ chức mọi thứ theo trật tự và không chấp nhận sự bừa bãi hay cẩu thả. Với tính cách thực tế, họ không dễ bị cảm xúc chi phối mà luôn suy xét mọi việc một cách lý trí. Xử Nữ nam có xu hướng đặt ra tiêu chuẩn cao cho bản thân và cả những người xung quanh, khiến họ đôi khi trở nên khó tính. Tuy nhiên, họ lại là những người rất đáng tin cậy, luôn sẵn sàng giúp đỡ người khác khi cần.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Cầu toàn và tỉ mỉ" },
					{
						type: "text",
						value:
							"Nam Xử Nữ là người vô cùng chi tiết và cẩn thận trong mọi việc. Họ luôn đặt ra những tiêu chuẩn khắt khe và cố gắng đạt đến sự hoàn hảo. Điều này giúp họ trở thành những người làm việc hiệu quả nhưng cũng khiến họ dễ bị căng thẳng khi mọi thứ không theo ý muốn.",
					},
					{ type: "h2", value: "Thực tế và logic" },
					{
						type: "text",
						value:
							"Họ có tư duy thực tế, luôn suy nghĩ một cách có logic trước khi đưa ra quyết định. Họ không dễ bị cuốn theo những điều viển vông hay cảm xúc cá nhân mà luôn xem xét vấn đề dựa trên dữ kiện và lập luận.",
					},
					{ type: "h2", value: "Trầm lặng nhưng sâu sắc" },
					{
						type: "text",
						value:
							"Xử Nữ nam không phải là người quá sôi nổi hay thích thể hiện bản thân. Họ có xu hướng sống nội tâm, thích quan sát và phân tích mọi thứ xung quanh. Tuy nhiên, khi đã thân thiết với ai đó, họ sẽ trở nên cởi mở và thể hiện sự quan tâm sâu sắc.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và tận tâm" },
					{
						type: "text",
						value:
							"Khi yêu, nam Xử Nữ là người vô cùng chung thủy và tận tâm. Họ không dễ dàng bước vào một mối quan hệ, nhưng khi đã yêu, họ sẽ dành toàn bộ tình cảm và sự quan tâm cho đối phương.",
					},
					{ type: "h2", value: "Khó tính và cầu toàn trong tình yêu" },
					{
						type: "text",
						value:
							"Xử Nữ nam có xu hướng đặt ra tiêu chuẩn cao cho người yêu, khiến họ đôi khi trở nên khắt khe và khó chiều. Tuy nhiên, điều này chỉ xuất phát từ mong muốn có một mối quan hệ bền vững và hoàn hảo.",
					},
					{ type: "h2", value: "Bảo vệ và che chở người yêu" },
					{
						type: "text",
						value:
							"Mặc dù không quá lãng mạn nhưng nam Xử Nữ lại là người rất biết cách chăm sóc và bảo vệ người mình yêu. Họ thể hiện tình cảm bằng hành động thực tế hơn là lời nói hoa mỹ.",
					},
				],
			},
		],
	},
	{
		id: 12,
		sex: "female",
		sign: "Virgo",
		icon: <TbZodiacVirgo />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Xử Nữ nữ" },
					{
						type: "text",
						value:
							"Nữ Xử Nữ là người thông minh, sắc sảo và có khả năng phân tích tuyệt vời. Họ sống có nguyên tắc, luôn đặt ra mục tiêu rõ ràng và làm việc một cách cẩn thận để đạt được điều đó. Đối với họ, sự ngăn nắp và trật tự là điều vô cùng quan trọng, khiến họ đôi khi bị ám ảnh bởi sự hoàn hảo. Họ thường mang đến cảm giác lạnh lùng, khó gần nhưng thực chất lại là những người rất chân thành và tận tâm với những người họ tin tưởng.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Thông minh và thực tế" },
					{
						type: "text",
						value:
							"Nữ Xử Nữ sở hữu trí tuệ nhạy bén, khả năng phân tích tốt và luôn đưa ra quyết định dựa trên lý trí. Họ không dễ bị cảm xúc chi phối mà luôn có cách nhìn nhận vấn đề rất thực tế.",
					},
					{ type: "h2", value: "Chăm chỉ và có trách nhiệm" },
					{
						type: "text",
						value:
							"Họ là những người phụ nữ độc lập, không ngừng nỗ lực để đạt được những gì mình mong muốn. Họ có trách nhiệm cao với công việc cũng như cuộc sống, khiến họ trở thành người đáng tin cậy.",
					},
					{ type: "h2", value: "Kín đáo và nghiêm túc" },
					{
						type: "text",
						value:
							"Xử Nữ nữ không phải là người thích phô trương hay thể hiện bản thân quá nhiều. Họ thích giữ khoảng cách nhất định với những người xung quanh và chỉ cởi mở với những ai thực sự hiểu họ.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và nghiêm túc trong tình yêu" },
					{
						type: "text",
						value:
							"Nữ Xử Nữ không yêu dễ dàng nhưng một khi đã yêu, họ rất chung thủy và nghiêm túc. Họ luôn tìm kiếm một mối quan hệ lâu dài và ổn định thay vì những cuộc tình thoáng qua.",
					},
					{ type: "h2", value: "Khắt khe trong lựa chọn bạn đời" },
					{
						type: "text",
						value:
							"Vì có tiêu chuẩn cao, họ thường rất kén chọn trong chuyện tình cảm. Họ không dễ bị thu hút bởi vẻ bề ngoài mà coi trọng sự thông minh, chân thành và trách nhiệm từ đối phương.",
					},
					{ type: "h2", value: "Yêu bằng hành động nhiều hơn lời nói" },
					{
						type: "text",
						value:
							"Xử Nữ nữ không quá lãng mạn nhưng lại thể hiện tình cảm bằng những hành động nhỏ nhặt và sự quan tâm chu đáo. Họ không giỏi nói lời ngọt ngào nhưng luôn sẵn sàng làm mọi thứ để người yêu cảm thấy an toàn và hạnh phúc.",
					},
				],
			},
		],
	},
	{
		id: 13,
		sex: "male",
		sign: "Libra",
		icon: <TbZodiacLibra />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Thiên Bình nam" },
					{
						type: "text",
						value:
							"Nam Thiên Bình thuộc nguyên tố Khí, đại diện cho sự công bằng, hài hòa và yêu thích cái đẹp. Họ thường là những người lịch thiệp, nhã nhặn và có khả năng giao tiếp xuất sắc. Thiên Bình nam luôn tìm kiếm sự cân bằng trong cuộc sống, từ công việc đến các mối quan hệ cá nhân. Họ có xu hướng né tránh mâu thuẫn và luôn cố gắng làm hài lòng mọi người xung quanh. Điều này đôi khi khiến họ do dự và khó đưa ra quyết định dứt khoát trong những tình huống quan trọng.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Lịch thiệp và tinh tế" },
					{
						type: "text",
						value:
							"Nam Thiên Bình là những quý ông thực thụ, luôn cư xử nhã nhặn và biết cách tạo thiện cảm với người khác. Họ chú trọng đến cách ăn nói, hành xử và luôn đặt mình vào vị trí của người đối diện để tránh làm tổn thương ai. Sự tinh tế này giúp họ có nhiều mối quan hệ xã hội tốt đẹp và được mọi người yêu quý.",
					},
					{ type: "h2", value: "Thích cái đẹp và nghệ thuật" },
					{
						type: "text",
						value:
							"Với gu thẩm mỹ cao, nam Thiên Bình rất quan tâm đến vẻ ngoài và những điều mang tính nghệ thuật. Họ thường có phong cách thời trang cuốn hút, biết cách phối hợp trang phục sao cho thanh lịch và ấn tượng. Ngoài ra, họ cũng bị thu hút bởi những thứ đẹp đẽ, từ con người đến không gian sống hay những món đồ trang trí tinh xảo.",
					},
					{ type: "h2", value: "Dễ do dự và thiếu quyết đoán" },
					{
						type: "text",
						value:
							": Một điểm yếu của nam Thiên Bình là sự thiếu quyết đoán, đặc biệt khi phải đưa ra những lựa chọn quan trọng. Vì luôn muốn cân bằng và làm hài lòng mọi người, họ thường cân nhắc quá nhiều, dẫn đến việc chậm trễ trong quyết định. Điều này có thể khiến họ bỏ lỡ nhiều cơ hội quan trọng trong cuộc sống.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Lãng mạn và yêu thích sự ngọt ngào" },
					{
						type: "text",
						value:
							"Khi yêu, nam Thiên Bình luôn biết cách tạo ra những khoảnh khắc lãng mạn. Họ yêu thích những buổi hẹn hò đầy thơ mộng, những món quà bất ngờ và những lời nói ngọt ngào. Với họ, tình yêu không chỉ là sự gắn kết mà còn là nghệ thuật của cảm xúc và sự tinh tế.",
					},
					{ type: "h2", value: "Chung thủy nhưng cần sự tự do" },
					{
						type: "text",
						value:
							"Dù là người lãng mạn, nam Thiên Bình vẫn cần một không gian riêng trong mối quan hệ. Họ không thích bị kiểm soát hay ràng buộc quá mức. Khi yêu một Thiên Bình, đối phương cần tin tưởng và tôn trọng sự tự do của họ, thay vì áp đặt hay tạo áp lực quá lớn.",
					},
					{ type: "h2", value: "Hợp với những người mạnh mẽ và quyết đoán" },
					{
						type: "text",
						value:
							"Do bản tính hay do dự, nam Thiên Bình thường bị thu hút bởi những người mạnh mẽ, quyết đoán. Một người có thể đưa ra quyết định nhanh chóng và chắc chắn sẽ giúp họ cân bằng lại sự thiếu quyết đoán của mình.",
					},
				],
			},
		],
	},
	{
		id: 14,
		sex: "female",
		sign: "Libra",
		icon: <TbZodiacLibra />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Thiên Bình nữ" },
					{
						type: "text",
						value:
							"Nữ Thiên Bình là những người dịu dàng, duyên dáng và có khiếu thẩm mỹ tuyệt vời. Họ yêu thích sự hài hòa, ghét sự xung đột và luôn cố gắng giữ gìn hòa khí trong các mối quan hệ. Với bản tính thân thiện, họ dễ dàng kết bạn và thu hút sự chú ý của người khác. Nàng Thiên Bình cũng rất tinh tế trong cách ứng xử, khiến ai tiếp xúc cũng cảm thấy thoải mái và dễ chịu. Tuy nhiên, đôi khi họ cũng bị phân tâm bởi quá nhiều lựa chọn và khó đưa ra quyết định dứt khoát.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Duyên dáng và cuốn hút" },
					{
						type: "text",
						value:
							"Nữ Thiên Bình sở hữu sự duyên dáng tự nhiên, khiến họ trở thành tâm điểm của mọi sự chú ý. Họ có phong thái nhẹ nhàng, nụ cười quyến rũ và cách nói chuyện thu hút. Không cần phải cố gắng quá nhiều, họ vẫn dễ dàng tạo ấn tượng với người đối diện.",
					},
					{ type: "h2", value: "Yêu thích cái đẹp và sự thanh lịch" },
					{
						type: "text",
						value:
							"Nữ Thiên Bình có gu thẩm mỹ tinh tế, luôn biết cách chăm sóc bản thân để giữ được vẻ ngoài hoàn hảo. Họ thích thời trang, nghệ thuật và thường có phong cách thanh lịch, trang nhã. Sự tinh tế của họ không chỉ thể hiện ở vẻ ngoài mà còn trong cách trang trí không gian sống và gu lựa chọn đồ dùng cá nhân.",
					},
					{
						type: "h2",
						value: "Thích được quan tâm nhưng không thích bị kiểm soát",
					},
					{
						type: "text",
						value:
							"Mặc dù thích nhận được sự quan tâm, nữ Thiên Bình không thích bị bó buộc trong một mối quan hệ quá khắt khe. Họ cần có sự tự do và không gian riêng để theo đuổi đam mê và sở thích cá nhân.",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Tình yêu như một câu chuyện cổ tích" },
					{
						type: "text",
						value:
							"Nữ Thiên Bình luôn mong muốn có một tình yêu đẹp như trong phim. Họ thích được chiều chuộng, yêu thương và trân trọng. Những hành động nhỏ như một tin nhắn ngọt ngào hay một cử chỉ quan tâm tinh tế cũng có thể khiến họ rung động.",
					},
					{
						type: "h2",
						value: "Không dễ xiêu lòng nhưng một khi yêu là sâu đậm",
					},
					{
						type: "text",
						value:
							"Nữ Thiên Bình có nhiều người theo đuổi nhưng không dễ dàng trao tình cảm cho ai. Họ cần thời gian để tìm hiểu và cảm nhận đối phương. Tuy nhiên, một khi đã yêu, họ rất chân thành và sẵn sàng làm mọi thứ để duy trì mối quan hệ.",
					},
					{ type: "h2", value: "Cần một người đủ vững chãi và đáng tin cậy" },
					{
						type: "text",
						value:
							"Vì bản tính dễ dao động, nữ Thiên Bình cần một người có thể làm điểm tựa vững chắc cho họ. Một người đàn ông mạnh mẽ, chín chắn, biết lắng nghe và thấu hiểu sẽ là lựa chọn lý tưởng của họ.",
					},
				],
			},
		],
	},
	{
		id: 15,
		sex: "male",
		sign: "Scorpio",
		icon: <TbZodiacScorpio />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Thiên Yết nam" },
					{
						type: "text",
						value:
							"Nam Thiên Yết là những người mạnh mẽ, bí ẩn và đầy cuốn hút. Họ sở hữu một nội tâm sâu sắc, khó đoán và luôn toát lên một vẻ lạnh lùng khó tiếp cận. Bên trong lớp vỏ bọc cứng rắn ấy là một trái tim tràn đầy nhiệt huyết, đam mê và lòng trung thành tuyệt đối với những gì họ tin tưởng. Họ không thích thể hiện quá nhiều về bản thân, nhưng khi đã đặt mục tiêu, họ sẽ theo đuổi đến cùng bằng tất cả sự quyết tâm. Đối với họ, quyền lực, danh vọng và sự kiểm soát là những yếu tố quan trọng trong cuộc sống.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Mạnh mẽ và quyết đoán" },
					{
						type: "text",
						value:
							"Nam Thiên Yết luôn thể hiện sự cứng rắn và quyết đoán trong mọi tình huống. Họ không dễ dàng bị ảnh hưởng bởi người khác và luôn có chính kiến riêng. Khi đã xác định mục tiêu, họ sẽ nỗ lực hết mình để đạt được, không ngại khó khăn hay thử thách.",
					},
					{ type: "h2", value: "Bí ẩn và khó đoán" },
					{
						type: "text",
						value:
							"Họ ít khi thể hiện cảm xúc ra bên ngoài, khiến người khác khó có thể hiểu được họ thực sự đang nghĩ gì. Điều này tạo nên một sức hút đặc biệt, nhưng cũng làm cho họ trở nên khó gần. Họ không thích những cuộc trò chuyện hời hợt mà luôn muốn khám phá chiều sâu trong tâm hồn của người khác.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và mãnh liệt trong tình yêu" },
					{
						type: "text",
						value:
							"Một khi đã yêu, Thiên Yết nam sẽ dành trọn vẹn tình cảm và sự chung thủy cho đối phương. Họ không phải kiểu người dễ thay đổi hay yêu chơi bời. Tuy nhiên, tình yêu của họ cũng rất mãnh liệt và đôi khi mang tính chiếm hữu cao.",
					},
					{ type: "h2", value: "Ghen tuông và thích kiểm soát" },
					{
						type: "text",
						value:
							"Bởi vì yêu quá sâu đậm, họ thường có xu hướng ghen tuông và muốn kiểm soát nửa kia. Họ không thích sự mập mờ hay bất cứ điều gì có thể làm tổn hại đến mối quan hệ của mình. Điều này đôi khi khiến họ trở nên quá nghiêm khắc trong tình yêu, nhưng tất cả chỉ xuất phát từ sự lo lắng và tình cảm chân thành của họ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 16,
		sex: "female",
		sign: "Scorpio",
		icon: <TbZodiacScorpio />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Thiên Yết nữ" },
					{
						type: "text",
						value:
							"Nữ Thiên Yết là những người phụ nữ bí ẩn, quyến rũ và đầy nội lực. Họ có một sức hút đặc biệt khiến người khác không thể rời mắt, nhưng đồng thời cũng mang đến cảm giác khó tiếp cận. Họ sống nội tâm, không dễ dàng chia sẻ cảm xúc của mình với bất kỳ ai, nhưng một khi đã tin tưởng ai đó, họ sẽ hết lòng với người đó. Trong cuộc sống, họ mạnh mẽ, độc lập và không bao giờ dễ dàng chịu thua trước khó khăn.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Quyến rũ và đầy sức hút" },
					{
						type: "text",
						value:
							"Nữ Thiên Yết sở hữu một vẻ đẹp bí ẩn và cuốn hút một cách tự nhiên. Họ không cần quá phô trương nhưng vẫn có thể khiến người khác bị mê hoặc bởi ánh mắt và khí chất của mình. Họ không thích thể hiện quá nhiều, nhưng chính sự lạnh lùng và bí ẩn ấy lại làm họ trở nên đặc biệt.",
					},
					{ type: "h2", value: "Mạnh mẽ và quyết liệt" },
					{
						type: "text",
						value:
							"Họ là những người phụ nữ đầy nghị lực, không dễ bị khuất phục trước bất cứ điều gì. Họ có thể đối mặt với khó khăn một cách mạnh mẽ và không bao giờ chịu thua cuộc. Nếu họ đã quyết định làm điều gì đó, họ sẽ theo đuổi đến cùng mà không cần bất kỳ ai giúp đỡ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Chung thủy và sâu sắc trong tình yêu" },
					{
						type: "text",
						value:
							"Nữ Thiên Yết khi yêu rất nghiêm túc và không bao giờ dễ dàng thay đổi tình cảm. Họ yêu một cách sâu sắc, mạnh mẽ và luôn muốn có một mối quan hệ gắn bó lâu dài. Tuy nhiên, họ cũng cần một người thực sự xứng đáng mới có thể mở lòng.",
					},
					{ type: "h2", value: "Khó tin tưởng nhưng yêu hết mình" },
					{
						type: "text",
						value:
							"Họ có một lớp phòng vệ rất dày và không dễ dàng tin tưởng bất kỳ ai. Nhưng nếu ai đó có thể phá bỏ lớp rào cản ấy, họ sẽ yêu bằng cả trái tim và sẵn sàng hy sinh tất cả vì đối phương. Họ không thích sự giả dối hay phản bội, và nếu bị tổn thương, họ sẽ không bao giờ tha thứ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 17,
		sex: "male",
		sign: "Sagittarius",
		icon: <TbZodiacSagittarius />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Nhân Mã nam" },
					{
						type: "text",
						value:
							"Nam Nhân Mã là những chàng trai yêu tự do, phóng khoáng và tràn đầy năng lượng. Họ luôn tìm kiếm những trải nghiệm mới, thích phiêu lưu và không bao giờ muốn bị ràng buộc trong bất kỳ khuôn khổ nào. Tinh thần lạc quan và sự vui vẻ của họ khiến họ trở thành người bạn đồng hành lý tưởng trong mọi cuộc chơi. Bản chất tò mò và thích khám phá khiến họ luôn muốn mở rộng tầm nhìn và thử thách bản thân trong những lĩnh vực mới. Họ có một trái tim rộng mở, sẵn sàng kết bạn với mọi người và không ngần ngại thể hiện suy nghĩ của mình.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Lạc quan và vui vẻ" },
					{
						type: "text",
						value:
							"Nam Nhân Mã luôn nhìn cuộc sống với một thái độ tích cực, dù gặp phải khó khăn hay thử thách. Họ tin rằng mọi chuyện đều có cách giải quyết và không bao giờ để bản thân bị chìm đắm trong tiêu cực quá lâu. Sự vui vẻ của họ có thể lan tỏa và làm cho những người xung quanh cảm thấy thoải mái.",
					},
					{ type: "h2", value: "Yêu thích tự do và khám phá" },
					{
						type: "text",
						value:
							"Không gì có thể trói buộc được Nhân Mã nam, vì họ sinh ra để phiêu lưu. Họ thích đi đây đi đó, gặp gỡ những con người mới và khám phá những nền văn hóa khác nhau. Với họ, cuộc sống là một hành trình không ngừng nghỉ, và họ luôn háo hức chờ đón những điều mới mẻ phía trước.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Đào hoa nhưng chân thành" },
					{
						type: "text",
						value:
							"Nhân Mã nam được nhiều người yêu thích bởi sự duyên dáng và tính cách vui vẻ của họ. Tuy nhiên, họ không phải là người dễ bị ràng buộc trong tình yêu. Họ thích tìm hiểu nhiều người trước khi thực sự nghiêm túc với một ai đó. Nhưng khi đã yêu thật lòng, họ sẽ dành cho đối phương sự chân thành và trân trọng tuyệt đối.",
					},
					{ type: "h2", value: "Cần một tình yêu không gò bó" },
					{
						type: "text",
						value:
							"Với Nhân Mã nam, tình yêu phải mang lại niềm vui và sự thoải mái, chứ không phải áp lực hay ràng buộc. Họ không thích cảm giác bị kiểm soát, và một mối quan hệ quá gò bó có thể khiến họ muốn chạy trốn. Vì vậy, họ cần một người yêu có cùng suy nghĩ tự do và biết tôn trọng không gian cá nhân của họ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 18,
		sex: "female",
		sign: "Sagittarius",
		icon: <TbZodiacSagittarius />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Nhân Mã nữ" },
					{
						type: "text",
						value:
							"Nữ Nhân Mã là những cô gái tràn đầy nhiệt huyết, yêu thích sự tự do và luôn tìm kiếm những điều thú vị trong cuộc sống. Họ là những người phụ nữ độc lập, mạnh mẽ và không dễ bị ảnh hưởng bởi ý kiến của người khác. Họ luôn theo đuổi đam mê, sống hết mình với những gì mình yêu thích và không bao giờ ngừng khám phá thế giới xung quanh. Sự cởi mở và lạc quan của họ khiến họ trở thành người bạn đồng hành tuyệt vời trong mọi cuộc hành trình.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Tự do và độc lập" },
					{
						type: "text",
						value:
							"Nữ Nhân Mã không thích sự ràng buộc và luôn muốn tự quyết định cuộc sống của mình. Họ có suy nghĩ riêng và không dễ dàng bị ảnh hưởng bởi người khác. Với họ, cuộc sống là những trải nghiệm không ngừng, và họ không muốn bị bó buộc bởi bất kỳ điều gì.",
					},
					{ type: "h2", value: "Nhiệt huyết và năng động" },
					{
						type: "text",
						value:
							"Họ luôn tràn đầy năng lượng và không thể ngồi yên một chỗ quá lâu. Họ thích tham gia các hoạt động mới, thử sức với những điều chưa từng làm và không bao giờ ngừng tìm kiếm những điều thú vị trong cuộc sống. Sự năng động của họ khiến những người xung quanh luôn cảm thấy hứng khởi.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Lãng mạn nhưng không thích bị ràng buộc" },
					{
						type: "text",
						value:
							"Nữ Nhân Mã là những người yêu lãng mạn nhưng không thích một tình yêu quá nghiêm túc hoặc quá gò bó. Họ muốn một mối quan hệ vừa đủ sâu sắc nhưng vẫn giữ được sự tự do cá nhân. Họ cần một người yêu có thể đồng hành cùng họ trên những chuyến hành trình, chứ không phải kìm hãm họ lại.",
					},
					{ type: "h2", value: "Chung thủy với người xứng đáng" },
					{
						type: "text",
						value:
							"Dù có vẻ phóng khoáng trong tình yêu, nhưng khi đã yêu thật lòng, nữ Nhân Mã sẽ rất chung thủy. Họ không thích sự giả dối và sẽ chỉ gắn bó với người mà họ cảm thấy thực sự xứng đáng. Họ cần một người bạn đời có thể chia sẻ với họ những niềm vui trong cuộc sống, chứ không phải một người chỉ muốn sở hữu họ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 19,
		sex: "male",
		sign: "Capricorn",
		icon: <TbZodiacCapricorn />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Ma Kết nam" },
					{
						type: "text",
						value:
							"Nam Ma Kết là những người có tinh thần trách nhiệm cao, sống thực tế và luôn theo đuổi mục tiêu với sự kiên trì bền bỉ. Họ thuộc tuýp người trưởng thành sớm, suy nghĩ chín chắn và ít khi để cảm xúc chi phối quyết định của mình. Trong công việc lẫn cuộc sống, họ đề cao tính kỷ luật và luôn có kế hoạch rõ ràng để đạt được thành công. Tuy nhiên, đôi khi sự nghiêm túc quá mức khiến họ trở nên khô khan, ít thể hiện cảm xúc, gây hiểu lầm rằng họ là người lạnh lùng. Dù vậy, bên trong họ là một người đàn ông đáng tin cậy, luôn sẵn sàng bảo vệ và chăm sóc những người mình yêu thương.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Thực tế và tham vọng" },
					{
						type: "text",
						value:
							"Ma Kết nam là những người có tầm nhìn xa, luôn đặt ra mục tiêu lớn và không ngừng nỗ lực để đạt được nó. Họ không thích sự viển vông hay mơ mộng mà luôn suy nghĩ thực tế, hành động có tính toán rõ ràng. Điều này giúp họ đạt được nhiều thành tựu trong công việc và cuộc sống. Tuy nhiên, đôi khi sự tham vọng quá mức khiến họ trở nên cứng nhắc, ít linh hoạt trong suy nghĩ.",
					},
					{ type: "h2", value: "Kỷ luật và nguyên tắc" },
					{
						type: "text",
						value:
							"Họ là người có kỷ luật cao, luôn tuân thủ các quy tắc và không bao giờ chấp nhận sự lười biếng hay thiếu trách nhiệm. Khi đã quyết định làm gì, họ sẽ kiên trì theo đuổi đến cùng mà không bị cám dỗ hay chùn bước trước khó khăn. Chính sự nghiêm túc này giúp họ được đồng nghiệp và bạn bè tin tưởng, nhưng cũng khiến họ đôi khi bị xem là quá cứng nhắc.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Lạnh lùng nhưng chân thành" },
					{
						type: "text",
						value:
							"Ma Kết nam không phải là kiểu người thể hiện tình cảm một cách lãng mạn hay khoa trương. Họ thường lạnh lùng, ít nói nhưng lại yêu rất sâu sắc và chân thành. Khi đã yêu ai, họ sẽ dành hết lòng chung thủy và sẵn sàng bảo vệ người mình yêu. Tuy nhiên, sự khô khan của họ đôi khi khiến đối phương cảm thấy thiếu sự quan tâm và cần nhiều thời gian để hiểu được tình cảm thực sự của họ.",
					},
					{ type: "h2", value: "Người đàn ông của gia đình" },
					{
						type: "text",
						value:
							"Khi bước vào một mối quan hệ nghiêm túc, Ma Kết nam luôn hướng đến sự ổn định và lâu dài. Họ là những người đàn ông có trách nhiệm, luôn cố gắng xây dựng một gia đình hạnh phúc và vững chắc. Họ không thích những mối quan hệ hời hợt mà luôn tìm kiếm một người bạn đời có thể cùng họ vượt qua mọi khó khăn trong cuộc sống.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 20,
		sex: "female",
		sign: "Capricorn",
		icon: <TbZodiacCapricorn />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Ma Kết nữ" },
					{
						type: "text",
						value:
							"Nữ Ma Kết là những cô gái mạnh mẽ, độc lập và đầy tham vọng. Họ không thích dựa dẫm vào ai mà luôn muốn tự xây dựng sự nghiệp và cuộc sống của riêng mình. Họ thông minh, sắc sảo và có khả năng lãnh đạo bẩm sinh, luôn biết cách kiểm soát mọi thứ trong tay mình. Tuy nhiên, họ cũng khá nghiêm túc và ít khi thể hiện cảm xúc ra bên ngoài. Đối với họ, sự thành công và ổn định trong cuộc sống quan trọng hơn những thú vui nhất thời.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Thực tế và độc lập" },
					{
						type: "text",
						value:
							"Nữ Ma Kết là những người rất thực tế, không dễ bị cảm xúc chi phối và luôn có suy nghĩ chín chắn trong mọi tình huống. Họ không thích phụ thuộc vào người khác mà luôn cố gắng tự mình đạt được những gì mình muốn. Họ có khả năng giải quyết vấn đề rất tốt, luôn suy nghĩ logic và đưa ra quyết định dựa trên lý trí nhiều hơn cảm xúc.",
					},
					{ type: "h2", value: "Kiên trì và nghiêm túc" },
					{
						type: "text",
						value:
							"Một khi đã đặt ra mục tiêu, Ma Kết nữ sẽ kiên trì theo đuổi đến cùng. Họ không dễ bị nản lòng trước khó khăn mà luôn tìm cách vượt qua thử thách để đạt được thành công. Trong công việc, họ là những người rất chuyên nghiệp, luôn hoàn thành mọi nhiệm vụ một cách xuất sắc và nghiêm túc. Tuy nhiên, đôi khi sự nghiêm túc quá mức khiến họ trở nên cứng nhắc và khó gần.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Khó mở lòng nhưng rất chung thủy" },
					{
						type: "text",
						value:
							"Nữ Ma Kết không phải là người dễ dàng rơi vào lưới tình, họ luôn có sự cân nhắc kỹ lưỡng trước khi quyết định bước vào một mối quan hệ. Họ cần một người đàn ông đủ đáng tin cậy, đủ kiên nhẫn để có thể phá vỡ lớp vỏ bọc mạnh mẽ của họ. Một khi đã yêu, họ sẽ rất chung thủy và sẵn sàng làm mọi thứ vì người mình yêu.",
					},
					{ type: "h2", value: "Tìm kiếm sự ổn định trong tình yêu" },
					{
						type: "text",
						value:
							"Họ không thích những mối quan hệ hời hợt hay quá nhiều sóng gió. Điều họ mong muốn là một tình yêu vững chắc, có thể cùng nhau xây dựng một tương lai bền vững. Họ là mẫu phụ nữ của gia đình, có thể chu toàn mọi thứ nhưng cũng không bao giờ đánh mất bản thân vì tình yêu.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 21,
		sex: "male",
		sign: "Aquarius",
		icon: <TbZodiacAquarius />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Bảo Bình nam" },
					{
						type: "text",
						value:
							"Nam Bảo Bình là những người có tư duy sáng tạo, độc lập và yêu thích sự tự do. Họ luôn tìm kiếm sự mới mẻ, thích khám phá những điều khác biệt và không muốn bị ràng buộc vào bất kỳ khuôn khổ nào. Với bản tính cởi mở, họ có thể dễ dàng kết bạn với nhiều người, luôn mang đến năng lượng tích cực cho những người xung quanh. Tuy nhiên, sự khác biệt của họ cũng khiến họ đôi khi trở nên khó hiểu, khó đoán. Dù vậy, họ vẫn là những người đàn ông thú vị, đầy sức hút và không bao giờ nhàm chán trong mắt người khác.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Tư duy sáng tạo và độc đáo" },
					{
						type: "text",
						value:
							"Nam Bảo Bình không bao giờ đi theo lối mòn mà luôn có cách suy nghĩ và giải quyết vấn đề theo cách riêng của mình. Họ có trí tưởng tượng phong phú, luôn tìm ra những ý tưởng mới lạ, độc đáo mà người khác ít khi nghĩ đến. Đây là lý do họ thường thành công trong những lĩnh vực đòi hỏi sự sáng tạo và đổi mới. Tuy nhiên, đôi khi sự khác biệt quá mức khiến họ bị coi là lập dị hoặc khó hiểu.",
					},
					{ type: "h2", value: "Tự do và không thích bị ràng buộc" },
					{
						type: "text",
						value:
							"Họ là những người yêu thích sự tự do, không muốn bị kiểm soát hay bó buộc vào bất kỳ quy tắc nào. Họ thích làm mọi thứ theo cách của riêng mình và sẽ cảm thấy khó chịu nếu ai đó cố ép buộc họ làm điều gì đó trái với mong muốn. Chính vì thế, họ thường không thích những môi trường quá gò bó, cứng nhắc.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Khó đoán và ít bộc lộ cảm xúc" },
					{
						type: "text",
						value:
							"Trong chuyện tình cảm, Bảo Bình nam là những người khó nắm bắt và ít khi thể hiện cảm xúc một cách rõ ràng. Họ có thể thích một người nhưng không dễ dàng bày tỏ, hoặc đôi khi lại thể hiện tình cảm theo cách rất riêng, không giống ai. Điều này khiến đối phương có thể cảm thấy họ xa cách hoặc thiếu sự quan tâm.",
					},
					{ type: "h2", value: "Một người yêu thú vị và không nhàm chán" },
					{
						type: "text",
						value:
							"Dù có phần khó đoán, nhưng khi yêu, họ lại là những người rất thú vị. Họ luôn mang đến sự bất ngờ cho đối phương, khiến tình yêu của họ không bao giờ trở nên nhàm chán. Họ không thích sự lặp lại, luôn tìm cách làm mới mối quan hệ để cả hai luôn cảm thấy vui vẻ, hạnh phúc.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 22,
		sex: "female",
		sign: "Aquarius",
		icon: <TbZodiacAquarius />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Bảo Bình nữ" },
					{
						type: "text",
						value:
							"Nữ Bảo Bình là những cô gái thông minh, cá tính và có phong cách rất riêng. Họ không thích bị ràng buộc bởi bất kỳ điều gì và luôn muốn sống theo cách của mình. Với tư duy cởi mở, họ dễ dàng hòa nhập với mọi người, luôn tạo ra một bầu không khí vui vẻ, thoải mái xung quanh mình. Tuy nhiên, họ cũng khá độc lập, không thích phụ thuộc vào ai, điều này đôi khi khiến họ trông có vẻ lạnh lùng hoặc khó tiếp cận.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Thông minh và sáng tạo" },
					{
						type: "text",
						value:
							"Nữ Bảo Bình là những người có tư duy rất sắc sảo, luôn có những ý tưởng độc đáo mà không ai có thể nghĩ tới. Họ yêu thích sự mới mẻ, không ngại thử thách bản thân trong nhiều lĩnh vực khác nhau. Nhờ vào trí thông minh của mình, họ có thể thích nghi nhanh với mọi tình huống và giải quyết vấn đề một cách linh hoạt.",
					},
					{ type: "h2", value: "Độc lập và cá tính mạnh mẽ" },
					{
						type: "text",
						value:
							"Họ không phải là những cô gái yếu đuối hay dễ bị ảnh hưởng bởi người khác. Ngược lại, họ rất độc lập, luôn tự đưa ra quyết định cho cuộc sống của mình. Họ không thích bị kiểm soát hay ép buộc vào bất kỳ khuôn khổ nào, điều này khiến họ đôi khi trông có vẻ bướng bỉnh hoặc khó gần.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Không dễ dàng mở lòng với ai" },
					{
						type: "text",
						value:
							"Bảo Bình nữ không phải là người dễ dàng yêu ai đó ngay từ cái nhìn đầu tiên. Họ cần thời gian để tìm hiểu, để cảm nhận xem đối phương có thực sự phù hợp với mình hay không. Chính vì thế, họ thường không vội vàng trong chuyện tình cảm, mà sẽ chọn lọc rất kỹ trước khi bước vào một mối quan hệ nghiêm túc.",
					},
					{ type: "h2", value: "Một người yêu thú vị và khó đoán" },
					{
						type: "text",
						value:
							"Khi yêu, Bảo Bình nữ không bao giờ để tình yêu trở nên nhàm chán. Họ luôn tạo ra những bất ngờ, mang đến cảm giác mới mẻ cho đối phương. Họ có cách thể hiện tình yêu rất riêng, không quá ủy mị nhưng vẫn khiến người kia cảm thấy đặc biệt. Tuy nhiên, họ cũng cần một không gian riêng, không thích bị kiểm soát quá mức trong mối quan hệ.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 23,
		sex: "male",
		sign: "Pisces",
		icon: <TbZodiacPisces />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Song Ngư nam" },
					{
						type: "text",
						value:
							"Nam Song Ngư là những chàng trai mộng mơ, sống tình cảm và rất nhạy cảm. Họ mang trong mình một tâm hồn nghệ sĩ, yêu thích sự lãng mạn và thường bị cuốn hút bởi những điều đẹp đẽ trong cuộc sống. Không chỉ có trí tưởng tượng phong phú, họ còn rất thấu hiểu cảm xúc của người khác, luôn sẵn sàng lắng nghe và chia sẻ. Tuy nhiên, đôi khi họ có xu hướng sống quá nhiều trong thế giới nội tâm của mình, dễ bị cảm xúc chi phối. Vì thế, họ cần học cách cân bằng giữa thực tế và mộng tưởng để có một cuộc sống trọn vẹn hơn.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Nhạy cảm và dễ bị cảm xúc chi phối" },
					{
						type: "text",
						value:
							"Nam Song Ngư là những người cực kỳ nhạy bén với cảm xúc, cả của bản thân lẫn những người xung quanh. Họ dễ vui nhưng cũng dễ buồn, có thể cảm nhận sâu sắc mọi sự thay đổi dù là nhỏ nhất. Chính vì vậy, đôi khi họ trở nên dễ bị tổn thương, đặc biệt khi phải đối diện với sự thất vọng hoặc phản bội. Họ cần học cách mạnh mẽ hơn để tránh bị cuốn theo những cảm xúc tiêu cực.",
					},
					{ type: "h2", value: "Sống nội tâm và thích sự yên bình" },
					{
						type: "text",
						value:
							"Họ không thích những nơi quá ồn ào hay môi trường căng thẳng, mà luôn tìm kiếm sự bình yên trong cuộc sống. Thay vì lao vào những cuộc tranh cãi, họ sẽ chọn cách im lặng hoặc rút lui. Chính điều này đôi khi khiến họ bị hiểu lầm là người thiếu quyết đoán, nhưng thực ra họ chỉ muốn tránh những điều làm tổn thương mình.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Lãng mạn và chân thành khi yêu" },
					{
						type: "text",
						value:
							"Khi yêu, Song Ngư nam là những chàng trai cực kỳ lãng mạn, luôn biết cách khiến đối phương cảm thấy hạnh phúc. Họ thích những cử chỉ quan tâm nhẹ nhàng, những món quà bất ngờ và những khoảnh khắc ngọt ngào bên cạnh người mình yêu. Đối với họ, tình yêu không chỉ là cảm xúc mà còn là sự thấu hiểu và sẻ chia.",
					},
					{ type: "h2", value: "Dễ tổn thương trong chuyện tình cảm" },
					{
						type: "text",
						value:
							"Vì sống tình cảm nên họ rất sợ bị tổn thương trong tình yêu. Nếu bị phản bội hoặc không được đáp lại tình cảm như mong muốn, họ có thể chìm trong đau khổ rất lâu. Đôi khi, họ còn có xu hướng bi quan hoặc tự trách bản thân khi một mối quan hệ kết thúc. Chính vì thế, họ cần một người bạn đời biết trân trọng và thấu hiểu mình.",
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
	{
		id: 24,
		sex: "female",
		sign: "Pisces",
		icon: <TbZodiacPisces />,
		tabs: [
			{
				label: "Tổng quan",
				content: [
					{ type: "h2", value: "Tổng quan về cung Song Ngư nữ" },
					{
						type: "text",
						value:
							"Nữ Song Ngư là những cô gái dịu dàng, nữ tính và có tâm hồn mơ mộng. Họ sống thiên về cảm xúc, dễ xúc động và luôn mong muốn có một tình yêu đẹp như cổ tích. Với trái tim ấm áp, họ luôn sẵn sàng giúp đỡ người khác mà không cần đòi hỏi sự đền đáp. Tuy nhiên, chính sự nhạy cảm này cũng khiến họ dễ bị tổn thương nếu không được yêu thương đúng cách.",
					},
				],
			},
			{
				label: "Tính cách",
				content: [
					{ type: "h2", value: "Dịu dàng và tinh tế" },
					{
						type: "text",
						value:
							"Những cô gái Song Ngư luôn mang đến cảm giác nhẹ nhàng, dễ chịu cho những người xung quanh. Họ biết cách quan tâm đến người khác, luôn chú ý đến những điều nhỏ nhặt để làm cho cuộc sống trở nên dễ dàng hơn. Nhờ sự tinh tế này, họ dễ dàng tạo dựng được những mối quan hệ tốt đẹp.",
					},
					{ type: "h2", value: "Dễ tin người và hay mơ mộng" },
					{
						type: "text",
						value:
							'Vì có tâm hồn lãng mạn, họ thường hay đặt niềm tin vào những điều tốt đẹp trong cuộc sống. Họ dễ bị thu hút bởi những lời nói ngọt ngào và dễ dàng rung động trước những cử chỉ yêu thương. Tuy nhiên, điều này cũng có thể khiến họ trở thành "con mồi" cho những người không chân thành, dễ bị tổn thương nếu đặt niềm tin sai chỗ.',
					},
					{ type: "h2", value: "" },
					{
						type: "text",
						value: "",
					},
				],
			},
			{
				label: "Tình yêu",
				content: [
					{ type: "h2", value: "Mong muốn một tình yêu lãng mạn" },
					{
						type: "text",
						value:
							"Nữ Song Ngư luôn khao khát một tình yêu trọn vẹn, đầy sự quan tâm và lãng mạn. Họ thích những cử chỉ nhẹ nhàng, những lời nói yêu thương và những khoảnh khắc đáng nhớ bên người mình yêu. Đối với họ, tình yêu không chỉ là sự gắn kết mà còn là sự thấu hiểu và nâng đỡ nhau trong cuộc sống.",
					},
					{ type: "h2", value: "Dễ bị tổn thương khi yêu" },
					{
						type: "text",
						value:
							"Vì đặt quá nhiều cảm xúc vào tình yêu, họ dễ cảm thấy đau lòng nếu mọi thứ không diễn ra như mong đợi. Nếu bị phản bội hoặc không được trân trọng, họ có thể mất rất lâu để vượt qua. Tuy nhiên, nếu tìm được người yêu thương thật lòng, họ sẽ là những người bạn đời tuyệt vời, luôn mang đến sự ấm áp và hạnh phúc cho đối phương.",
					},
					{
						type: "h2",
						value: "",
					},
					{
						type: "text",
						value: "",
					},
				],
			},
		],
	},
];

export const VietnamProvinces = [
	"An Giang",
	"Bà Rịa - Vũng Tàu",
	"Bắc Giang",
	"Bắc Kạn",
	"Bạc Liêu",
	"Bắc Ninh",
	"Bến Tre",
	"Bình Định",
	"Bình Dương",
	"Bình Phước",
	"Bình Thuận",
	"Cà Mau",
	"Cần Thơ",
	"Cao Bằng",
	"Đà Nẵng",
	"Đắk Lắk",
	"Đắk Nông",
	"Điện Biên",
	"Đồng Nai",
	"Đồng Tháp",
	"Gia Lai",
	"Hà Giang",
	"Hà Nam",
	"Hà Nội",
	"Hà Tĩnh",
	"Hải Dương",
	"Hải Phòng",
	"Hậu Giang",
	"Hoà Bình",
	"Hưng Yên",
	"Khánh Hoà",
	"Kiên Giang",
	"Kon Tum",
	"Lai Châu",
	"Lâm Đồng",
	"Lạng Sơn",
	"Lào Cai",
	"Long An",
	"Nam Định",
	"Nghệ An",
	"Ninh Bình",
	"Ninh Thuận",
	"Phú Thọ",
	"Phú Yên",
	"Quảng Bình",
	"Quảng Nam",
	"Quảng Ngãi",
	"Quảng Ninh",
	"Quảng Tri",
	"Sóc Trăng",
	"Sơn La",
	"Tây Ninh",
	"Thái Bình",
	"Thái Nguyên",
	"Thanh Hoá",
	"Thừa Thiên Huế",
	"Tiền Giang",
	"Tp. Hồ Chí Minh",
	"Trà Vinh",
	"Tuyên Quang",
	"Vĩnh Long",
	"Vĩnh Phúc",
	"Yên Bái",
];

export const ZodiacSigns = [
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
