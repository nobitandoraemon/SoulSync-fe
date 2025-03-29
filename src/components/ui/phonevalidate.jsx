import { useState } from "react";
import {
	isPossiblePhoneNumber,
	isValidPhoneNumber,
	validatePhoneNumberLength,
} from "libphonenumber-js";
const PhoneInputField = () => {
	// const [formData, setFormData] = useState({
	// 	phoneNumber: "",
	// });

	const handlePhoneNumber = async (e) => {
		e.preventDefault();
        const check = isPossiblePhoneNumber(formData.phoneNumber, "VN");
        if (check) {
            
            try {
                const response = await axios({
                    method: "PUT",
                    url: API_ROUTES.GET_USER + `/${user.username}`,
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    data: formData,
                    withCredentials: true,
                });
                toast("Cập nhật thành công", { type: "success" });
                setTimeout(() => {
                    location.reload();
                }, 1500);
            } catch (error) {
                console.error(error);
                toast("Cập nhật thành bại", { type: "error" });
            }
		} else {
            toast("Số điện thoại không hợp lệ", {type: 'error'})
	    }
    }
	};
	// const validatePhone = () => {
	// 	const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
	// 	return phoneRegex.test(formData.phoneNumber);
	// };
	return (
		<div className="p-12 text-center bg-base-100">
			<form onSubmit={handlePhoneNumber} className="w-full mx-auto mb-6">
				<fieldset className="fieldset">
					<legend className="w-full fieldset-legend text-primary">
						Số điện thoại của bạn
						<div className="btn btn-sm btn-accent btn-outline btn-disabled">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
								/>
							</svg>
						</div>
					</legend>
					<input
						type="number"
						className="input"
						minLength={10}
						maxLength={11}
						// placeholder={user.phoneNumber}
						onChange={(e) =>
							setFormData({ ...formData, phoneNumber: e.target.value })
						}
					/>
				</fieldset>
				<button type="submit" className="btn btn-primary">
					Test
				</button>
			</form>
			{/* <span>{check}</span> */}
		</div>
	);
};

export default PhoneInputField;
