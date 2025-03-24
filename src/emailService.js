import emailjs from "@emailjs/browser";

const initEmailJS = (publicKey) => {
	emailjs.init(publicKey);
};

export default initEmailJS;
