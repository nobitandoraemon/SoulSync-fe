import { useState, useEffect } from "react"
import axios from 'axios'
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";
import { getTokenFromLocalStorage } from "../lib/common";
import { toast } from "react-toastify";

const VietnamProvinces = [
  "An Giang", "Ba Ria - Vung Tau", "Bac Giang", "Bac Kan", "Bac Lieu",
  "Bac Ninh", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc",
  "Binh Thuan", "Ca Mau", "Can Tho", "Cao Bang", "Da Nang",
  "Dak Lak", "Dak Nong", "Dien Bien", "Dong Nai", "Dong Thap",
  "Gia Lai", "Ha Giang", "Ha Nam", "Hanoi", "Ha Tinh",
  "Hai Duong", "Hai Phong", "Hau Giang", "Hoa Binh", "Hung Yen",
  "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong",
  "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An",
  "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh",
  "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang",
  "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa",
  "Thua Thien Hue", "Tien Giang", "Ho Chi Minh City", "Tra Vinh", "Tuyen Quang",
  "Vinh Long", "Vinh Phuc", "Yen Bai"
];

const ZodiacSigns = [
  // 0
{ 
  name: "Bạch Dương", gender: "Male", symbol: "♈", dates: "21/3 – 19/4", element: "Lửa", 
  personality: ["Mạnh mẽ", "Thẳng thắn", "Nhiệt huyết", "Hào sảng"], 
  description: "Nói đến tính cách 12 cung hoàng đạo nam khi yêu thì Bạch Dương là chòm sao dẫn đầu về độ “ga lăng” với người yêu. Họ luôn biết tạo ra những điều bất ngờ và khiến cho đối phương trở nên mê mẩn, thẫn thờ ngay từ lần đầu tiên nhìn thấy Bạch Dương. Trong tình yêu, Bạch Dương tỏ ra vẻ “nghịch ngợm” và đào hoa nhưng lại dễ phải lòng với những cô nàng mang nét đẹp truyền thống, dịu dàng và đoan trang." 
},

// 1
{ 
  name: "Bạch Dương", gender: "Female", symbol: "♈", dates: "21/3 – 19/4", element: "Lửa", 
  personality: ["Nhiệt huyết", "Chân thành", "Mạnh mẽ", "Độc lập"], 
  description: "Bạch Dương nữ rất thông minh kể cả trong công việc lẫn cuộc sống thì nàng ta vẫn có thể dễ dàng thể hiện tốt bản thân. Cô nàng cũng được nhiều người yêu mến bởi vẻ ngoài năng động và tràn đầy năng lượng. Khi yêu, Bạch Dương nữ rất biết cách quan tâm và chiều chuộng đối phương nên được người yêu “cưng như cưng trứng”." 
},

// 2
{ 
  name: "Kim Ngưu", gender: "Male", symbol: "♉", dates: "20/4 – 20/5", element: "Đất", 
  personality: ["Kiên định", "Chân thành", "Đáng tin cậy", "Tinh tế"], 
  description: "Những anh chàng Kim Ngưu sở hữu nét tính cách vô cùng thân thiện, được đánh giá cao khi nói về nét tính cách của 12 cung hoàng đạo khi yêu. Kim Ngưu nam mặc dù sở hữu vẻ bề ngoài khá trầm tính và khá ít nói nhưng thực chất sâu bên trong con người này lại là trái tim trẻ con rất “mong manh”. Họ thường có xu hướng bộc lộ nét “ấu trĩ” để thu hút crush của mình." 
},

// 3
{ 
  name: "Kim Ngưu", gender: "Female", symbol: "♉", dates: "20/4 – 20/5", element: "Đất", 
  personality: ["Dịu dàng", "Chân thành", "Đảm đang", "Kiên trì"], 
  description: "Nhắc đến tính cách 12 cung hoàng đạo tinh tế và dịu dàng chắc chắn phải đề cập đến cái tên Kim Ngưu nữ. Họ đề cao sự chính nghĩa và thích giúp đỡ những người xung quanh. Kim Ngưu nữ dễ bị thu hút bởi chàng trai truyền thống, nam tính. Họ rất biết cách chiều chuộng người yêu và dành những tình cảm, hành động ngọt ngào để “sưởi ấm” trái tim của đối phương." 
},

// 4
{ 
  name: "Song Tử", gender: "Male", symbol: "♊", dates: "21/5 - 20/6", element: "Khí", 
  personality: ["Thông minh", "Hài hước", "Hoạt bát", "Linh hoạt"], 
  description: "Tính cách 12 cung hoàng đạo khéo léo nhất phải gọi tên chàng trai Song Tử. Có thể nói, những bạn nam thuộc cung này rất biết cách ăn nói nên dễ khiến cho đối phương có cảm giác rằng Song Tử đang theo đuổi họ. Do đó, cung này cũng được nhận xét là khá đào hoa trong tình yêu. Song Tử nam rất thích làm những điều lãng mạn cho người yêu nhưng đôi khi lại thay đổi tính khí một cách thất thường." 
},

// 5
{ 
  name: "Song Tử", gender: "Female", symbol: "♊", dates: "21/5 - 20/6", element: "Khí", 
  personality: ["Hoạt bát", "Thông minh", "Duyên dáng", "Sáng tạo"], 
  description: "Nữ nhân Song Tử rất hào phóng và coi trọng tình nghĩa. Đôi khi, họ cũng trở nên bốc đồng và bị đánh giá là bao đồng. Song Tử nữ khi yêu rất chân thành. Khác với bản tính đào hoa của mình thì Song Tử nữ nổi tiếng thủy chung nếu đối phương chính là “người tình trong mộng” mà họ tìm kiếm bấy lâu." 
},

// 6
{ 
  name: "Cự Giải", gender: "Male", symbol: "♋", dates: "21/6 - 22/7", element: "Nước", 
  personality: ["Ấm áp", "Chung thủy", "Quan tâm", "Che chở"], 
  description: "12 cung hoàng đạo tính cách hoàn toàn không giống nhau, trong số đó, cung hoàng đạo nam nổi tiếng nhẹ nhàng và dịu dàng khi yêu đó chính là Cự Giải. Vẻ bề ngoài của cung hoàng đạo này có vẻ thân thiện và dễ gần nhưng trên thực tế, rất khó để tiếp xúc và kết bạn với Cự Giải nam. Mặc dù luôn thể hiện sự ân cần và chu đáo với người mình yêu nhưng Cự Giải nam đôi khi cũng rất cứng đầu, không có thiện chí khi nghe góp ý từ người khác nên dễ xảy ra các cuộc mâu thuẫn không đáng có với đối phương." 
},

// 7
{ 
  name: "Cự Giải", gender: "Female", symbol: "♋", dates: "21/6 - 22/7", element: "Nước", 
  personality: ["Tận tâm", "Yêu thương", "Chu đáo", "Nhạy cảm"], 
  description: "Sống ẩn chính là nét tính cách đặc trưng ở cô nàng Cự Giải. Dù vậy, họ rất biết cách quan tâm, săn sóc người yêu như một người mẹ dịu dàng. Cự giải thường thiếu quyết đoán khi phải đưa ra quyết định nên thường có những hướng đi sai lầm trong tình yêu và khiến bản thân phải chịu tổn thương." 
},

// 8
{ 
  name: "Sư Tử", gender: "Male", symbol: "♌", dates: "23/7 - 22/8", element: "Lửa", 
  personality: ["Tự tin", "Hào phóng", "Trung thành", "Có trách nhiệm"], 
  description: "12 cung hoàng đạo và tính cách của mỗi người thuộc các cung này sẽ có sự tương đồng. Do đó, bạn có thể thấy rõ ràng rằng các chàng trai có cung hoàng đạo là Sư Tử thường có vẻ ngoài mạnh mẽ, tràn đầy năng lượng và tự tin. Khi yêu, chàng trai Sư Tử bỗng chốc hóa thành “chú mèo nhỏ” mè nheo với người yêu. Họ cực kỳ biết cách chiều chuộng đối phương và yêu một cách chân thành nên họ cũng mong nhận lại được tình cảm tương xứng từ người yêu." 
},

// 9
{ 
  name: "Sư Tử", gender: "Female", symbol: "♌", dates: "23/7 - 22/8", element: "Lửa", 
  personality: ["Quyến rũ", "Tự tin", "Trung thành", "Hào phóng"], 
  description: "Tính cách của cô nàng Sư Tử được nhiều người đánh giá cao trong tính cách 12 cung hoàng đạo bởi sự thẳng thắn và trung thực. Sư Tử nữ là tuýp người khó gần nhưng một khi đã trở thành “con mồi” trong mắt họ thì bạn sẽ được họ đối xử không khác gì một “chủ nhân” thực thụ. Khi yêu, Sư Tử thường thể hiện sự dịu dàng và nữ tính, khác với vẻ ngoài mạnh mẽ, tự tin thường ngày." 
},

// 10
{ 
  name: "Xử Nữ", gender: "Male", symbol: "♍", dates: "23/8 – 22/9", element: "Đất", 
  personality: ["Tận tâm", "Tinh tế", "Thông minh", "Chu đáo"], 
  description: "Khó tính, cầu toàn và khéo léo có tiếng nằm trong top tính cách 12 cung hoàng đạo không thể nào không nhắc đến anh chàng Xử Nữ. Những bạn nam thuộc cung này thường khá kiệm lời, trầm tính và điềm đạm nên hiếm khi thể hiện tình cảm công khai với người mình yêu. Họ thẳng thắn trong mọi việc nên nếu bạn làm phật lòng họ thì Xử Nữ nam sẵn sàng góp ý ngay và không cần quan tâm đến cảm xúc của bạn ra sao." 
},

// 11
{ 
  name: "Xử Nữ", gender: "Female", symbol: "♍", dates: "23/8 – 22/9", element: "Đất", 
  personality: ["Thanh lịch", "Tinh tế", "Sâu sắc", "Chu đáo"], 
  description: "Cung Xử Nữ thường nổi tiếng bởi sự thẳng tính và nghiêm túc trong cảm công việc lẫn cuộc sống hằng ngày. Nếu muốn yêu được cung hoàng đạo này, bạn cần cho họ cảm giác an toàn và tin tưởng tuyệt đối. Dù Xử Nữ nữ rất thích chiều chuộng người yêu nhưng nếu bạn có ý định phản bội họ thì xác định rằng cả đời này hai bạn sẽ trở thành kẻ thù của nhau, bởi điều này là điều kiêng kỵ đối với Xử Nữ." 
},

// 12
{ 
  name: "Thiên Bình", gender: "Male", symbol: "♎", dates: "23/9 – 22/10", element: "Khí", 
  personality: ["Duyên dáng", "Hòa nhã", "Công bằng", "Tinh tế"], 
  description: "Thiên Bình nổi tiếng là cung hoàng đạo yêu bằng mắt. Anh chàng thường si mê người đối diện bởi vẻ đẹp kiêu sa toát lên từ con người họ. Tuy nhiên, trong tính cách 12 cung hoàng đạo thì Thiên Bình nam được nhận xét là rất thú vị và có khiếu hài hước. Nam Thiên Bình cũng biết cách quan tâm đến người mình yêu bằng những cử chỉ ấm áp, ngọt ngào.." 
},

// 13
{ 
  name: "Thiên Bình", gender: "Female", symbol: "♎", dates: "23/10 – 22/11", element: "Khí", 
  personality: ["Duyên dáng", "Thanh lịch", "Công bằng", "Hòa nhã"], 
  description: "Thú vị là hai từ diễn tả đúng nhất nét tính cách của cô nàng Thiên Bình trong tính cách 12 cung hoàng đạo. Họ biết cách ứng xử khéo léo trong giao tiếp nên dễ dàng lọt vào “mắt xanh” của nhiều anh chàng xung quanh. Tuy nhiên, Thiên Bình nữ rất kén chọn khi yêu bởi họ không muốn chịu sự tổn thương." 
},

// 14
{ 
  name: "Thiên Yết", gender: "Male", symbol: "♏", dates: "23/10 - 21/11", element: "Nước", 
  personality: ["Chung thủy", "Sâu sắc", "Mạnh mẽ", "Quyến rũ"], 
  description: "Thiên Yết (Cung Bọ Cạp) là cung hoàng đạo sở hữu bộ óc “già trước tuổi” nên những bạn nam thuộc cung hoàng đạo này rất hiểu chuyện và hiểu tâm lý của người khác. Anh chàng cũng được nhận xét là khá chân thành và chung tình khi yêu. Thiên Yết nam coi trọng mối quan hệ của bản thân nên hiếm khi lựa chọn từ bỏ trừ khi có lý do chính đáng." 
},

// 15
{ 
  name: "Thiên Yết", gender: "Female", symbol: "♏", dates: "23/10 - 21/11", element: "Nước", 
  personality: ["Mạnh mẽ", "Chung thủy", "Đam mê", "Bí ẩn"], 
  description: "Tính cách Thiên Yết được nhận xét là trầm nhất trong tính cách 12 của cung hoàng đạo. Các bạn nữ thuộc cung này thường rất đa nghi nên đôi khi gây ra những cuộc tranh cãi không đáng có với người yêu. Tuy nhiên, Thiên Yết nữ rất ấm áp, họ thường có những hành động ngọt ngào bất ngờ cho đối phương." 
},

// 16
{ 
  name: "Nhân Mã", gender: "Male", symbol: "♐", dates: "22/11 - 21/12", element: "Lửa", 
  personality: ["Lạc quan", "Phóng khoáng", "Nhiệt tình", "Chân thành"], 
  description: "Nhân Mã nam được biết đến là các anh chàng có tính cách “lì lợm”, một khi đã quyết định làm gì thì dù gian khó thế nào, họ cũng sẽ hoàn thành “đến nơi, đến chốn”. Cũng giống như trong tình yêu, Nhân Mã nam không dễ dàng từ bỏ tình cảm của mình trước khó khăn và thử thách." 
},

// 17
{ 
  name: "Nhân Mã", gender: "Female", symbol: "♐", dates: "22/11 - 21/12", element: "Lửa", 
  personality: ["Tự do", "Lạc quan", "Vui vẻ", "Chân thành"], 
  description: "Nữ Nhân Mã yêu sự tự do và không thích bị ràng buộc bởi bất kỳ thứ gì. Họ thích giúp đỡ người khác và biết trau dồi, nâng cấp bản thân khi “rơi vào lưới tình”. Đôi khi, bạn nữ thuộc cung này khá cứng đầu và ngang bướng, chỉ thích làm theo ý mình nên khiến người yêu khó chịu." 
},

// 18
{ 
  name: "Ma Kết", gender: "Male", symbol: "♑", dates: "22/12 - 19/1", element: "Đất", 
  personality: ["Trách nhiệm", "Tham vọng", "Kiên trì", "Thực tế"], 
  description: "Trong tính cách của 12 cung hoàng đạo thì nam Ma Kết là cung sống theo kỷ luật và nguyên tắc nên những bạn nam thuộc cung này thường khá “cứng nhắc” và cố chấp khi yêu. Anh chàng còn khá kỹ tính nên đôi khi sẽ khiến người mình yêu cảm thấy khó chịu." 
},

// 19
{ 
  name: "Ma Kết", gender: "Female", symbol: "♑", dates: "22/12 - 19/1", element: "Đất", 
  personality: ["Trách nhiệm", "Kiên trì", "Đáng tin", "Chín chắn"], 
  description: "Ma Kết nữ rất biết cách chu toàn cho mọi việc trong cuộc sống lẫn công việc. Mặc dù nổi tiếng là cung hoàng đạo có tính cách kỹ tính và kiên định trong tính cách 12 cung hoàng đạo nhưng cô nàng rất dễ bị “chi phối” khi yêu thật lòng. Họ dễ đánh mất bản thân chỉ để theo đuổi người mà họ cho rằng là “hoàng tử bạch mã” của mình." 
},

// 20
{ 
  name: "Bảo Bình", gender: "Male", symbol: "♒", dates: "20/1 - 18/2", element: "Khí", 
  personality: ["Sáng tạo", "Độc lập", "Thông minh", "Nhân đạo"], 
  description: "Bảo Bình nam là cung hoàng đạo có tính cách trầm tính, họ không thích nhận được sự chú ý từ quá nhiều người. Khi yêu thật lòng, nam Bảo Bình thường thể hiện cách hành động quan tâm, chăm sóc và chiều chuộng người yêu như một em bé chính hiệu." 
},

// 21
{ 
  name: "Bảo Bình", gender: "Female", symbol: "♒", dates: "20/1 - 18/2", element: "Khí", 
  personality: ["Độc lập", "Thân thiện", "Sáng tạo", "Duy tâm"], 
  description: "Hiền hòa, thanh lịch là những nét đẹp dùng để miêu tả tính cách của cô nàng Bảo Bình. Họ biết cách lắng nghe và đưa ra lời khuyên nên là chỗ dựa “tinh thần” vững chắc của người yêu. Khi yêu thật lòng, họ thường “giả ngơ” không quan tâm người yêu nhưng lại thầm lặng làm những hành động ngọt ngào cho đối phương." 
},

// 22
{ 
  name: "Song Ngư", gender: "Male", symbol: "♓", dates: "19/2 - 20/3", element: "Nước", 
  personality: ["Nhạy cảm", "Sáng tạo", "Trực giác", "Lãng mạn"], 
  description: "Song Ngư nam nổi tiếng là cung hoàng đạo có trái tim vị tha trong tính cách 12 cung hoàng đạo. Họ rất sợ hành động và lời nói của bản thân khiến người khác bị tổn thương. Trong tình yêu, anh chàng giỏi lắng nghe, biết chăm sóc và thay đổi bản thân theo hướng tích cực để phù hợp với người mà họ yêu." 
},

// 23

{ 
  name: "Song Ngư", gender: "Female", symbol: "♓", dates: "19/2 - 20/3", element: "Nước", 
  personality: ["Lãng mạn", "Dịu dàng", "Mơ mộng", "Tinh tế"], 
  description: "Hồn nhiên và giàu lòng nhân ái là nét tính cách được tìm thấy ở nữ Song Ngư. Dù là con gái nhưng nữ Song Ngư lại nổi tiếng là cung hoàng đạo “ga lăng” nhất trong tính cách 12 cung hoàng đạo. Đây là nữ nhân chung tình khi yêu nên rất dễ trở nên mù quáng, không phân biệt đúng sai, theo đuổi tình yêu “không hồi kết” của mình." 
},
];

const CompletedBar = () => {
  return(
    <div className="w-[23%] h-3 bg-blue-700 rounded-full border border-blue-700"></div>
  )
}

const NotCompletedBar = () => {
  return(
    <div className="w-[23%] h-3 bg-gray-300 rounded-full border border-gray-300"></div>
  )
}


const Locations = VietnamProvinces.map((location) => {
  return(
      <option key={location} value={location}>{location}</option>
  )
})

const TellUs = ({setStep, formData, setFormData }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNameChange = (e) => {
    setFormData({ ...formData, fullname: e.target.value });
  }

  const handleGenderChange = (gender) => {
    setSelectedGender(gender)
    setFormData({ ...formData, gender: gender })
  }

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value})
  }

  const Submit1 = (e) => {
    e.preventDefault()
    console.log(formData)
    if (e.target.checkValidity() && formData.gender ){
      setStep(2)
  } else(
      alert('Choose your gender')
  )
}

  return(
    <div>
      <h1 className="font-bold text-3xl font-sans mt-4 ">Nói một chút về bạn...</h1>
      <form className="flex flex-col gap-8 mt-10" onSubmit={Submit1} >
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Tên bạn là gì ?</h2>
          <div className="">
            <input type="text" placeholder="Tên của bạn" className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-md bg-white w-full " required value={formData.fullname} onChange={handleNameChange}   />
          </div>
        </div> 
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Bạn thuộc giới tính nào ?</h2>
          <div className="flex gap-1 ">
            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Male' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Male')}
            value="Male">👨 Nam</button>

            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Female' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Female')} value="Female">👩 Nữ</button>

            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Other' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Other')} value="Other">✨ Khác</button>
          </div>
        </div> 
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Bạn đang sống ở đâu ?</h2>
          <select className=" px-4 py-2 border rounded-full shadow-md bg-white w-full " value={formData.location} onChange={handleLocationChange}>
            {Locations}
          </select>
        </div>
        <button type="submit" className="w-full bg-green-500 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8">Tiếp theo</button>
      </form>
  </div>
  )
}




const Address = ({ setStep, formData, setFormData  }) =>{
  
  const Submit2 = (e) => {

    e.preventDefault()
    console.log(formData)
    if (e.target.checkValidity()) {
      setStep(3)
    }
  }

  const handleTelChange = (e) => {
    setFormData({ ...formData, phoneNumber: e.target.value })
  }

  const handleQuoteChange = (e) => {
    setFormData({ ...formData, quote: e.target.value})
  }


  return(
  <div>
    <h1 className="font-bold text-3xl font-sans mt-4 ">Cho chúng tôi biết nhiều hơn về bạn...</h1>
    <form className="flex flex-col gap-8 mt-10" onSubmit={Submit2}>
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">Mình nên gọi bạn là gì ? (Tuỳ chọn)</h2>
          <input type="text" placeholder="Nickname" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full "  />
      </div> 
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">Câu nói yêu thích của bạn là gì?</h2>
          <input type="text" placeholder="Quote" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full " required value={formData.quote} onChange={handleQuoteChange} />
      </div> 
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">Số điện thoại của bạn là gì ?</h2>
          <input type="number" placeholder="Số điện thoại" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full " required value={formData.phoneNumber} onChange={handleTelChange} />
      </div> 
        <div className="flex justify-between">
          <button type="button" className="w-full bg-red-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8 w-1/2" onClick={() => setStep(1)}>Trở lại</button>
          <button type="submit" className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8 w-1/2">Tiếp theo</button>
          
        </div>
    </form>
  </div>
  )
}

const BirthDate = ({setStep, formData, setFormData }) => {
  const submitBirthDate = (e) => {
    e.preventDefault()
    console.log(formData)
    if(e.target.checkValidity()) {
      const formdata = new FormData(e.target);
      const formValues = Object.fromEntries(formdata.entries())
      const Dates = formValues.date
      setStep(4)
    }
  }

  const [userHobby, setUserHobby] = useState([])

  const handleHobbyChange = (hobby) => {
    let updatedHobby;
    if (userHobby.includes(hobby)){
      updatedHobby = userHobby.filter((h) => h !== hobby)
    } else {
      updatedHobby = [...userHobby, hobby]
    }
    setUserHobby(updatedHobby);
    setFormData({ ...formData, hobby: updatedHobby})
  }

  const handleBirthChange = (e) => {
    setFormData({...formData, birthday: e.target.value})
  }

  const avatarLinkChange = (e) => {
    setFormData({ ...formData,avatar: e.target.value })
  }


	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold ">
				Tell us more about you...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={submitBirthDate}>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">Ngày sinh của bạn là gì? </h2>
					<input
						type="date"
						name="date"
						placeholder="Birth Date"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						required
						value={formData.birthday}
						onChange={handleBirthChange}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">Sở thích của bạn là gì?</h2>
					<div className="flex gap-1 justify-center items-center flex-wrap">
          <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Games') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Games')}
            >
              🎮 Chơi Game
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Reading') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Reading')}
            >
              📚 Đọc Sách
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Painting') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Painting')}
            >
              🎨 Vẽ
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Music') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Music')}
            >
              🎵 Nghe Nhạc
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Photos') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Photos')}
            >
              📷 Chụp Ảnh
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Cooking') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Cooking')}
            >
              🍳 Nấu Ăn
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Travel') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Travel')}
            >
              ✈️ Du Lịch
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Garden') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Garden')}
            >
              🌱 Trồng Cây
            </button>
            <button
              type="button"
              className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
                userHobby.includes('Movies') ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleHobbyChange('Movies')}
            >
              🎥 Xem Phim
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-8">
					<h2 className="text-sm">Link avatar mà bạn muốn gán (Tuỳ Chọn) </h2>
					<input
						type="text"
						name="avatar-link"
						placeholder="Avatar Link"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						required
						value={formData.avatar}
						onChange={avatarLinkChange}
					/>
				</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="w-full px-4 py-2 mt-8 text-white bg-red-600 border rounded-full shadow-md hover:bg-red-300"
							onClick={() => setStep(2)}
						>
							Back
						</button>
						<button
							type="submit"
							className="w-full px-4 py-2 mt-8 text-white bg-green-600 border rounded-full shadow-md hover:bg-green-300"
						>
							Next
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
const ShowPersonality = ({ setStep, formData, setFormData }) => {
	const DateArray = formData.birthday.split("-");
	const Month = DateArray[1];
	const Day = DateArray[2];
	const StringNumber = `${Month}.${Day}`;
	const Indicator = Number(StringNumber);

	let i = 0;
	if (formData.gender === "Male") {
		if (Indicator >= 4.2 && Indicator <= 5.2) {
			i = 1;
		} else if (Indicator >= 5.21 && Indicator <= 6.2) {
			i = 3;
		} else if (Indicator >= 6.21 && Indicator <= 7.22) {
			i = 5;
		} else if (Indicator >= 7.23 && Indicator <= 8.22) {
			i = 7;
		} else if (Indicator >= 8.23 && Indicator <= 9.22) {
			i = 9;
		} else if (Indicator >= 9.23 && Indicator <= 10.22) {
			i = 11;
		} else if (Indicator >= 10.23 && Indicator <= 11.21) {
			i = 13;
		} else if (Indicator >= 11.22 && Indicator <= 12.21) {
			i = 15;
		} else if (
			(Indicator >= 12.22 && Indicator <= 12.31) ||
			(Indicator >= 1.01 && Indicator <= 1.19)
		) {
			i = 17;
		} else if (Indicator >= 1.2 && Indicator <= 2.18) {
			i = 19;
		} else if (Indicator >= 2.19 && Indicator <= 3.2) {
			i = 21;
		}
	} else if (formData.gender === "Female") {
		if (Indicator >= 3.21 && Indicator <= 4.19) {
			i = 2;
		} else if (Indicator >= 4.2 && Indicator <= 5.2) {
			i = 4;
		} else if (Indicator >= 5.21 && Indicator <= 6.2) {
			i = 6;
		} else if (Indicator >= 6.21 && Indicator <= 7.22) {
			i = 8;
		} else if (Indicator >= 7.23 && Indicator <= 8.22) {
			i = 10;
		} else if (Indicator >= 8.23 && Indicator <= 9.22) {
			i = 12;
		} else if (Indicator >= 9.23 && Indicator <= 10.22) {
			i = 14;
		} else if (Indicator >= 10.23 && Indicator <= 11.21) {
			i = 16;
		} else if (Indicator >= 11.22 && Indicator <= 12.21) {
			i = 18;
		} else if (
			(Indicator >= 12.22 && Indicator <= 12.31) ||
			(Indicator >= 1.01 && Indicator <= 1.19)
		) {
			i = 20;
		} else if (Indicator >= 1.2 && Indicator <= 2.18) {
			i = 22;
		} else if (Indicator >= 2.19 && Indicator <= 3.2) {
			i = 24;
		}
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedFormData = { ...formData, zodiac: i };
		setFormData(updatedFormData);
		// console.log(updatedFormData);
		const token = getTokenFromLocalStorage();
		const username = localStorage.getItem("username");
		try {
			const response = await axios(
				{
					method: "PUT",
					url: API_ROUTES.GET_USER + `/${username}`,
					headers: {
						authorization: `Bearer ${token}`,
					},
					withCredentials: true,
				},
				updatedFormData
			);
			// console.log(response);
		} catch (err) {
			toast(err.response.data.message, { type: "error" });
			console.log(err);
		}
		setStep(5);
	};

  return(
  <div>
    <div className='flex flex-col items-center text-center mt-5'>

      <h1 className="text-xl font-bold text-blue-600 mx-auto">Tính cách của bạn dựa trên ngày sinh và cung hoàng đạo</h1>

      <div className="text-4xl">{ZodiacSigns[i].symbol}</div>

      <h2 className="text-2xl font-semibold mt-2">{ZodiacSigns[i].name}</h2>

      <p className="text-gray-500">{ZodiacSigns[i].dates}</p>

      <p className="text-lg font-medium mt-2">
        <span className="text-[#f877dd] mr-2">Nguyên tố:</span> {ZodiacSigns[i].element}
    </p>
      <div className="mt-4">
        <h3 className="text-[#f877dd] font-semibold">Đặc điểm tính cách:</h3>

        <p className="text-gray-700">{ZodiacSigns[i].personality.join(", ")}</p>


    </div>
      <div className="mt-4">
        <h3 className="text-[#f877dd] font-semibold">
          Miêu tả:</h3>

        <p className="text-gray-700">{ZodiacSigns[i].
        description}</p>
    </div>
  </div>
    <div className="flex justify-between">
      <button type="button" className="w-full bg-red-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8 w-1/2" onClick={() => {setStep(3)}}>Trở lại</button>
      <button type="submit" className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8 w-1/2" onClick={handleSubmit}>Xác nhận</button>
    </div>
</div>
  )
}

const ThankYou = ({ setStep, formData, setFormData }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmitForm = () => {
    console.log(formData);
    navigate(APP_ROUTES.CHAT); // Navigate to the CHAT page
  };

  return (
    <div className="flex-flex-col gap-5">
      <h1 className="mt-8 text-center text-green-500 text-lg font-bold">
        Cảm ơn bạn vì đã cập nhật thông tin cá nhân
      </h1>
      <button
        type="submit"
        className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8"
        onClick={handleSubmitForm} // Call handleSubmit on button click
      >
        Tiếp theo
      </button>
    </div>
  );
};

const ProfileForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		birthday: "",
		gender: "",
		zodiac: "",
		location: "An Giang",
		fullname: "",
		phoneNumber: "",
		hobby: "",
    avatar: "",
    quote: "",
	});

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<TellUs
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<Address
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return (
					<BirthDate
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 4:
				return (
					<ShowPersonality
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 5:
				return (
					<ThankYou
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			default:
				return (
					<TellUs
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
		}
	};

	const RenderProgressBar = () => {
		const bars = [];
		for (let i = 1; i < 5; i++) {
			if (i < step) {
				bars.push(<CompletedBar key={i} />);
			} else {
				bars.push(<NotCompletedBar key={i} />);
			}
		}
		return bars;
	};

	return (
		<div className="bg-white w-1/3 mx-auto my-4 p-4 min-w-[500px]">
			<div className="bg-[#fdf3f7] p-6 rounded-3xl shadow-md">
				<div className="flex justify-center gap-5">{RenderProgressBar()}</div>
				{renderStep()}
			</div>
		</div>
	);
};

export default ProfileForm

