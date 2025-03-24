import React, {useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const form = useRef();
	const [messageSent, setMessageSent] = useState(""); // State to store the message
	const [messageType, setMessageType] = useState(""); // State to store message type (success or error)

	useEffect(() => {
		const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
		if (publicKey) {
			emailjs.init(publicKey);
		} else {
			console.error("Missing public key.");
		}
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

		if (serviceId && templateId) {
			emailjs.sendForm(serviceId, templateId, form.current).then(
				(result) => {
					console.log(result.text);
					setMessageSent("The message was successfully sent!");
					setMessageType("success"); // Set message type to success
					form.current.reset(); // Reset form
				},
				(error) => {
					console.error("Failed to send email:", error.text);
					setMessageSent("Failed to send the message, please try again.");
					setMessageType("error"); // Set message type to error
				}
			);
		} else {
			console.error("Missing service or template ID.");
		}
	};

	return (
		<section id="Contact" className="contact--section">
			<div>
				<h2>Contact Me</h2>
				<p className="text-lg">Let's keep in touch</p>
			</div>

			{/* Display success or error message at the top of the form */}
			{messageSent && (
				<div className={`message-feedback ${messageType === "success" ? "success" : "error"}`}>
					<p>{messageSent}</p>
				</div>
			)}

			<form ref={form} onSubmit={sendEmail} id="myForm" className="contact--form--container">
				<div className="contactContainer">
					<label htmlFor="first-name" className="contact--label">
						<span className="text-md">First Name</span>
						<input
							type="text"
							className="contact--input text-md"
							name="first-name"
							id="first-name"
							required
						/>
					</label>
					<label htmlFor="last-name" className="contact--label">
						<span className="text-md">Last Name</span>
						<input
							type="text"
							className="contact--input text-md"
							name="last-name"
							id="last-name"
							required
						/>
					</label>
					<label htmlFor="email" className="contact--label">
						<span className="text-md">Email</span>
						<input
							type="email"
							className="contact--input text-md"
							name="user-email"
							id="user-email"
							required
						/>
					</label>
					<label htmlFor="phone-number" className="contact--label">
						<span className="text-md">Phone Number</span>
						<input
							type="tel"
							className="contact--input text-md"
							name="phone-number"
							id="phone-number"
							required
						/>
					</label>
				</div>
				<label htmlFor="message" className="contact--label">
					<span className="text-md">Message</span>
					<textarea
						name="message"
						className="contact--input text-md"
						id="message"
						rows="8"
						placeholder="Type your message..."
						required
					/>
				</label>
				<label htmlFor="checkbox" className="checkbox--label">
					<input type="checkbox" name="terms" id="checkbox" required />
					<span className="text-sm">I accept the terms</span>
				</label>
				<div>
					<input type="submit" className="btn btn-primary contact--form--btn" value="SEND" />
				</div>
			</form>
		</section>
	);
};

export default ContactMe;
