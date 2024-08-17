console.log('*****************');
console.log('Made with 💖 and ☕ with WebAll Academy');
console.log('*****************');

const SOCIAL_LINKS = {
    telegram: {
      href: 'https://t.me/weball_updates',
      title: 'Telegram',
      icon: 'fab fa-telegram',
      text: 'Join Telegram Channel',
    },
    youtube: {
      href: 'https://www.youtube.com/@web-all?sub_confirmation=1',
      title: 'YouTube',
      icon: 'fab fa-youtube',
      text: 'Subscribe on YouTube',
    },
    linkedin: {
      href: 'https://www.linkedin.com/company/web-all',
      title: 'Linkedin',
      icon: 'fab fa-linkedin',
      text: 'Connect on LinkedIn',
    },
    instagram: {
      href: 'https://www.instagram.com/weball.io',
      title: 'Instagram',
      icon: 'fab fa-instagram-square',
      text: 'Follow on Instagram',
    },
    facebook: {
      href: 'https://www.facebook.com/weball.io',
      title: 'Facebook',
      icon: 'fab fa-facebook-square',
      text: 'Like Facebook Page',
    },
    x: {
      href: 'https://www.x.com/_weball',
      title: 'X',
      icon: 'fab fa-twitter',
      text: 'Follow on X',
    },
  }



let bgEl = document.getElementById("bg");
let linksEl = document.getElementById("links");
let hexString = "0123456789abcdef";

let randomColor = () => {
	let hexCode = "#";
	for (i = 0; i < 6; i++) {
		hexCode += hexString[Math.floor(Math.random() * hexString.length)];
	}
	return hexCode;
};

let generateGrad = () => {
	let colorOne = randomColor();
	let colorTwo = randomColor();
	bgEl.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;
};

// window.onload = generateGrad;

let output = '';
for (const type in SOCIAL_LINKS) {
    let link = SOCIAL_LINKS[type];
    output += `<a href="${link.href}" target="_blank" title="${link.text}"><i class="${link.icon}"></i></a>`
}
linksEl.innerHTML = output;