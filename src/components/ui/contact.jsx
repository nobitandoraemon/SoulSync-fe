const Contact = () => {
	
	const ContactDetails = ({imgSource, details, information }) =>{
		return(
			<div className="flex gap-5 w-3/5">
				<div className="w-1/5 min-w-16">
				  <img src={imgSource} className="w-full" />
				</div>
				<div>
					<h2 className="text-2xl font-bold">{details}</h2>
					<p>{information}</p>
				</div>
			</div>
		)
	}

	const FormInfor = ({Placeholder, types}) =>{
		return(
				<input type={types} placeholder={Placeholder} className="w-full h-12 rounded-xl" />
		)
	}

	return(
	<div className="flex flex-col  w-3/5 mx-auto gap-4 mt-10">
	  <div className="flex flex-col items-center justify-center gap-4 ">
			  <h2 className="font-extrabold text-2xl ">Contact us</h2>
			  <h1 className="font-bold text-5xl">GET IN TOUCH WITH US</h1>
			  <p className="text-xl font-light">We’re here to help! Whether you have questions, feedback, or need assistance, feel free to reach out to us. You can contact us via email, phone, or by filling out our online form. Our team is always ready to provide you with the support and information you need. Let’s connect and make your experience even better!</p>
	  </div> 
		<ContactDetails imgSource="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png" details="Our Location" information="JS Club FPT University" />
		<ContactDetails imgSource="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png" details="Phone Number" information="(+62)81 414 257 9980" />
		<ContactDetails imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqelKfAQrHxW6ANZ2O3Y-t4sDHP4UBTvCagA&s" details="Email Address"
		information="jsctv.doingoai@gmail.com" />
		<form className="flex flex-col gap-5 justify-center">
			<FormInfor types="text" Placeholder="  Your Name" />
			<FormInfor types="text" Placeholder="  Your Email" />
			<FormInfor types="text" Placeholder="  Your Phone" />
			<textarea placeholder="  Your Message" cols='20' rows='10' className="pt-1 rounded-xl" />
			<button className="bg-blue-600 p-3 rounded-lg text-xl text-white font-serif">Submit</button>
		</form>
</div>
	)
};

export default Contact;
