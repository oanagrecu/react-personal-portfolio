import React, {useRef, useEffect} from "react";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
	const form = useRef();
	useEffect(() => {
		emailjs.init("oLw9x7hYw639pF01B");
	}, []);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm("portfolioContact", "portfolioContact2023", form.current).then(
			(result) => {
				console.log(result.text);
				alert("Message successfully sent!");
				form.current.reset();
			},
			(error) => {
				console.log(error.text);
				alert("Failed to send the message, please try again");
			}
		);
	};

	return (
		<section id="Contact" className="contact--section">
			<div>
				<h2>Contact Me</h2>
				<p className="text-lg">Let's keep in touch</p>
			</div>
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
