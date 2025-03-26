import { useEffect, useRef, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const CloudinaryUploadWidget = ({
	uwConfig,
	setPublicId,
	avatarLinkChange,
}) => {
	const uploadWidgetRef = useRef(null);
	const uploadButtonRef = useRef(null);

	useEffect(() => {
		const initializeUploadWidget = () => {
			if (window.cloudinary && uploadButtonRef.current) {
				// Create upload widget
				uploadWidgetRef.current = window.cloudinary.createUploadWidget(
					uwConfig,
					(error, result) => {
						if (!error && result && result.event === "success") {
							console.log("Upload successful:", result.info);
							avatarLinkChange(result.info.secure_url);
							setPublicId(result.info.public_id);
						}
					}
				);

				// Add click event to open widget
				const handleUploadClick = () => {
					if (uploadWidgetRef.current) {
						uploadWidgetRef.current.open();
					}
				};

				const buttonElement = uploadButtonRef.current;
				buttonElement.addEventListener("click", handleUploadClick);

				// Cleanup
				return () => {
					buttonElement.removeEventListener("click", handleUploadClick);
				};
			}
		};

		initializeUploadWidget();
	}, [uwConfig, setPublicId]);

	return (
		<button
			ref={uploadButtonRef}
			id="upload_widget"
			className="btn btn-primary"
		>
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
					d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
				/>
			</svg>
			Upload
		</button>
	);
};

const Upload = ({ avatarLinkChange, formData, setFormData }) => {
	// Configuration
	const cloudName = "dbpqg1gsv";
	const uploadPreset = "soulsync";

	// State
	const [publicId, setPublicId] = useState("");

	// Cloudinary configuration
	const cld = new Cloudinary({
		cloud: {
			cloudName,
		},
	});

	// Upload Widget Configuration
	const uwConfig = {
		cloudName,
		uploadPreset,
		// Uncomment and modify as needed:
		cropping: true,
		showAdvancedOptions: true,
		sources: ["local", "url"],
		multiple: false,
		folder: "avatars",
		tags: ["users", "profile"],
		context: { alt: "user_uploaded" },
		// clientAllowedFormats: ["images"],
		maxImageFileSize: 2000000,
		// maxImageWidth: 2000,
		// theme: 'purple',
	};

	return (
		<div>
			<CloudinaryUploadWidget
				uwConfig={uwConfig}
				setPublicId={setPublicId}
				avatarLinkChange={avatarLinkChange}
			/>
		</div>
	);
};

export default Upload;
