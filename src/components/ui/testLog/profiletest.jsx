import { useState, useEffect } from "react"
import axios from 'axios'
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
  {  // 0
    name: "Aries",
    symbol: "♈",
    dates: "March 21 - April 19", // 3.21 - 4.19
    element: "Fire",
    personality: ["Energetic", "Courageous", "Impulsive", "Leader"],
    description: "Aries are natural-born leaders with high energy and confidence. They love challenges and take bold steps toward their goals."
  },
  { // 1
    name: "Taurus",
    symbol: "♉",
    dates: "April 20 - May 20",  // 4.20 - 5.20
    element: "Earth",
    personality: ["Reliable", "Patient", "Practical", "Loyal"],
    description: "Taurus individuals are steady and dependable. They appreciate stability, love comfort, and are deeply loyal in relationships."
  },
  { // 2 
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - June 20",  // 5.21 - 6.20
    element: "Air",
    personality: ["Curious", "Adaptable", "Witty", "Sociable"],
    description: "Geminis are intelligent and love learning new things. Their dual nature makes them versatile and highly social."
  },
  {  // 3 
    name: "Cancer",
    symbol: "♋",
    dates: "June 21 - July 22",  // 6.21 - 7.22
    element: "Water",
    personality: ["Emotional", "Nurturing", "Intuitive", "Protective"],
    description: "Cancers are deeply emotional and caring. They are protective of their loved ones and value deep emotional connections."
  },
  {  // 4
    name: "Leo",
    symbol: "♌",
    dates: "July 23 - August 22",  // 7.23 - 8.22
    element: "Fire",
    personality: ["Confident", "Ambitious", "Charismatic", "Generous"],
    description: "Leos love to be in the spotlight. They are bold, enthusiastic, and generous with their time and affection."
  },
  {  // 5
    name: "Virgo",
    symbol: "♍",
    dates: "August 23 - September 22",  // 8.23 - 9.22
    element: "Earth",
    personality: ["Detail-Oriented", "Analytical", "Practical", "Helpful"],
    description: "Virgos are highly analytical and perfectionists. They love organization and are always ready to help others."
  },
  { // 6
    name: "Libra",
    symbol: "♎",
    dates: "September 23 - October 22",  // 9.23 - 10.22
    element: "Air",
    personality: ["Charming", "Diplomatic", "Fair-minded", "Romantic"],
    description: "Libras seek balance and harmony. They are great mediators and love to be in loving, romantic relationships."
  },
  { // 7
    name: "Scorpio",
    symbol: "♏",
    dates: "October 23 - November 21",   // 10.23 - 11.21
    element: "Water",
    personality: ["Mysterious", "Passionate", "Loyal", "Intense"],
    description: "Scorpios are deep, passionate, and intense individuals. They form strong bonds and value loyalty above all."
  },
  { // 8
    name: "Sagittarius",
    symbol: "♐",
    dates: "November 22 - December 21", // 11.22 - 12.21
    element: "Fire",
    personality: ["Adventurous", "Optimistic", "Independent", "Philosophical"],
    description: "Sagittarius loves freedom and adventure. They have a fun-loving and optimistic outlook on life."
  },
  { // 9
    name: "Capricorn",
    symbol: "♑",
    dates: "December 22 - January 19", // 12.22 - 12.31 || 1.01 - 1.19
    element: "Earth",
    personality: ["Disciplined", "Responsible", "Ambitious", "Practical"],
    description: "Capricorns are hardworking and goal-oriented. They value discipline and strive for long-term success."
  },
  { // 10
    name: "Aquarius",
    symbol: "♒",
    dates: "January 20 - February 18",  // 1.20 - 2.18
    element: "Air",
    personality: ["Innovative", "Independent", "Humanitarian", "Unique"],
    description: "Aquarians are visionaries and love thinking outside the box. They value individuality and social justice."
  },
  { // 11
    name: "Pisces",
    symbol: "♓",
    dates: "February 19 - March 20",  // 2.19 - 3.20
    element: "Water",
    personality: ["Empathetic", "Creative", "Dreamy", "Intuitive"],
    description: "Pisces are highly sensitive and artistic. They are dreamers who value deep emotional and spiritual connections."
  }
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
    <>
      <option key={location} value={location}>{location}</option>
    </>
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
    if (e.target.checkValidity() && selectedGender !== null){
      setStep(2)
  } else(
      alert('Choose your gender')
  )
}

  return(
    <div>
      <h1 className="font-bold text-3xl font-sans mt-4 ">Tell us more about you...</h1>
      <form className="flex flex-col gap-8 mt-10" onSubmit={Submit1} >
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">What's your name?</h2>
          <div className="">
            <input type="text" placeholder="Name" className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-md bg-white w-full " required value={formData.fullname} onChange={handleNameChange}   />
          </div>
        </div> 
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">What's your gender?</h2>
          <div className="flex gap-1 ">
            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Male' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Male')}
            value="Male">👨 Male</button>

            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Female' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Female')} value="Female">👩 Female</button>

            <button type="button" className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${selectedGender === 'Other' ? "bg-gray-300" : "hover:bg-gray-200"}`} onClick={() => handleGenderChange('Other')} value="Other">✨ Other</button>
          </div>
        </div> 
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">What's your location?</h2>
          <select className=" px-4 py-2 border rounded-full shadow-md bg-white w-full " value={formData.location} onChange={handleLocationChange}>
            {Locations}
          </select>
        </div>
        <button type="submit" className="w-full bg-green-500 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8">Next</button>
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


  const handelEmailChange = (e) => {
    setFormData({ ...formData, username: e.target.value })
  }

  return(
  <div>
    <h1 className="font-bold text-3xl font-sans mt-4 ">Tell us more about you...</h1>
    <form className="flex flex-col gap-8 mt-10" onSubmit={Submit2}>
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">What should we call you? (Optional)</h2>
          <input type="text" placeholder="Nickname" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full "  />
      </div> 
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">What's your mobile number ?</h2>
          <input type="number" placeholder="Mobile Number" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full " required value={formData.phoneNumber} onChange={handleTelChange} />
      </div> 
        <div className="flex justify-between">
          <button type="button" className="w-full bg-red-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8 w-1/2" onClick={() => setStep(1)}>Back</button>
          <button type="submit" className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8 w-1/2">Next</button>
          
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

  const handleBirthChange = (e) => {
    setFormData({...formData, birthday: e.target.value})
  }

  return(
  <div>
    <h1 className="font-bold text-3xl font-sans mt-4 ">Tell us more about you...</h1>
    <form className="flex flex-col gap-8 mt-10" onSubmit={submitBirthDate}>
      <div className="flex flex-col gap-2">
          <h2 className="text-sm">What's your birth date ?</h2>
          <input type="date" name="date" placeholder="Birth Date" className=" border px-4 py-2  rounded-full shadow-md bg-white w-full " required value={formData.birthday} onChange={handleBirthChange}  />
          <div className="flex justify-between">
            <button type="button" className="w-full bg-red-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8" onClick={() =>setStep(2)}>Back</button>
            <button type="submit" className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8">Next</button>
            
          </div>
      </div>
    </form>
  </div>
  )
}
const ShowPersonality = ({ setStep, formData, setFormData }) => {  
  const DateArray = formData.birthday.split('-')
  const Month = DateArray[1]
  const Day = DateArray[2]
  const StringNumber = `${Month}.${Day}`
  const Indicator = Number(StringNumber)

  
  let i = 0
    if (Indicator >= 4.20 && Indicator <= 5.20 ) {
      i = 1
    } else if (Indicator >= 5.21 && Indicator <= 6.20){
      i = 2
    } else if (Indicator >= 6.21 && Indicator <= 7.22){
      i = 3
    } else if (Indicator >= 7.23 && Indicator <= 8.22){
      i = 4
    } else if (Indicator >= 8.23 && Indicator <= 9.22){
      i = 5
    } else if (Indicator >= 9.23 && Indicator <= 10.22){
      i = 6
    } else if (Indicator >= 10.23 && Indicator <= 11.21){
      i = 7
    } else if (Indicator >= 11.22 && Indicator <= 12.21){
      i = 8
    } else if ((Indicator >= 12.22 && Indicator <= 12.31)  ||(Indicator >= 1.01 && Indicator <= 1.19) ){
      i = 9
    } else if (Indicator >= 1.20 && Indicator <= 2.18){
      i = 10
    } else if (Indicator >= 2.19 && Indicator <= 3.20){
      i = 11
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormData({...formData, zodiac: ZodiacSigns[i].name})
      console.log(formData)
      axios.put(`https://soulsync-api.onrender.com/users/${formData.username}`, formData)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.error(err))
      setStep(5)
    }

  return(
  <div>
    <div className='flex flex-col items-center text-center mt-5'>

      <h1 className="text-xl font-bold text-blue-600 mx-auto">Your Personality Analysis Based on Your Birth Date</h1>

      <div className="text-4xl font-bold">{ZodiacSigns[i].symbol}</div>

      <h2 className="text-2xl font-semibold mt-2">{ZodiacSigns[i].name}</h2>

      <p className="text-gray-500">{ZodiacSigns[i].dates}</p>
setPro
      <p className="text-lg font-medium mt-2">
        <span className="text-[#f877dd] mr-2">Element:</span> {ZodiacSigns[i].element}
    </p>
      <div className="mt-4">
        <h3 className="text-[#f877dd] font-semibold">Personality Traits:</h3>

        <p className="text-gray-700">{ZodiacSigns[i].personality.join(", ")}</p>


    </div>
      <div className="mt-4">
        <h3 className="text-[#f877dd] font-semibold">Description:</h3>

        <p className="text-gray-700">{ZodiacSigns[i].description}</p>
    </div>
  </div>
    <div className="flex justify-between">
      <button type="button" className="w-full bg-red-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-red-300 mt-8 w-1/2" onClick={() => {setStep(3)}}>Back</button>
      <button type="submit" className="w-full bg-green-600 px-4 py-2 border shadow-md rounded-full text-white hover:bg-green-300 mt-8 w-1/2" onClick={handleSubmit}>Submit</button>
    </div>
</div>
  )
}

const ThankYou = ({setStep, formData, setFormData }) => {  
  console.log(formData)
  return(
  <div className="flex-flex-col gap-5">
    <h1 className="mt-8 text-center text-green-500 text-lg font-bold">Thank you for updating your information</h1>

  </div>
  
  )
}

const ProfileTest = () =>{

  const [step, setStep]  = useState(1);
  const [formData, setFormData] = useState({
    username: 'jboyk5',
    password: '',
    birthday: '',
    gender: '',
    zodiac: '',
    hobbies: [],
    location: 'An Giang',
    fullname: '',
    phoneNumber: '',
    quote: '',
    image: '',
  })

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TellUs setStep={setStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Address setStep={setStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <BirthDate setStep={setStep} formData={formData} setFormData={setFormData} />;
      case 4:
        return <ShowPersonality setStep={setStep} formData={formData} setFormData={setFormData} />;
      case 5:
        return <ThankYou setStep={setStep} formData={formData} setFormData={setFormData} />;
      default:
        return <TellUs setStep={setStep} formData={formData} setFormData={setFormData} />;
    }
  };

  const RenderProgressBar = () => {
    const bars = []
    for(let i = 1; i < 5; i++) {
      if (i < step) {
        bars.push(<CompletedBar />)
      } else {
        bars.push(<NotCompletedBar />)
      }
    }
    return bars
  }
  
  

  return(
    <div className="bg-white w-1/3 mx-auto my-4 p-4 min-w-[500px]">
      <div className="bg-[#fdf3f7] p-6 rounded-3xl shadow-md">
      <div className="flex justify-center gap-5">
        {RenderProgressBar()}
      </div>
        {renderStep()}
      </div>
    </div>
  )
}

export default ProfileTest 
