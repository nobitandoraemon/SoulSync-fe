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
          { type: "image", value: "./src/assets/Aries_logo.svg" },
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
            type: "h2",
            value: "Tính cách bốc đồng nhưng chân thành",
          },
          {
            type: "text",
            value:
              "Vì thuộc nguyên tố Lửa, Bạch Dương có tính cách khá bốc đồng, đôi khi thiếu kiên nhẫn và dễ nổi nóng. Tuy nhiên, họ lại rất chân thành và thẳng thắn, luôn thể hiện rõ ràng suy nghĩ của mình. Họ không thích sự vòng vo, càng ghét sự giả dối và mưu mô. Một khi đã đặt niềm tin vào ai đó, họ sẽ hết lòng vì người ấy. Nhưng cũng vì tính thẳng thắn này mà đôi lúc họ có thể làm tổn thương người khác mà không nhận ra.",
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
        content: [{ type: "h2", value: "Tình yêu bền bỉ và chân thành" }],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
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
        content: [{}],
      },
      {
        label: "Tính cách",
        content: [{}],
      },
      {
        label: "Tình yêu",
        content: [{}],
      },
    ],
  },
];
