/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

// filterEls[0].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[1].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[2].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[3].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[4].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[5].addEventListener('click', function() { 
// 	console.log('clicked')
// })

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) { 
		document.querySelector("#filters li.active").classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	})
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: "Calculator App",
		img: "4.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
		tags: ['html', 'js']
	},
	{
		name: "Slider App",
		img: "5.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
		tags: ['css']
	},
	{
		name: "Calculator App",
		img: "6.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
		tags: ['html']
	},
	{
		name: "Slider App",
		img: "7.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
		tags: ['css', 'js']
	},
	{
		name: "Calculator App",
		img: "8.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
		tags: ['html', 'js']
	},
	{
		name: "Slider App",
		img: "5.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
		tags: ['js']
	},
];

function renderProjects(tag) {
	let output = "";

	for (let i = 0; i < projects.length; i++) {
		if(tag == 'all' || projects[i].tags.includes(tag)) {
				output += `<div class="project">
				<img src="img/project/${projects[i].img}" alt="Calculator Project Image">
				<div class="content flex">
					<p>${projects[i].name}</p>
					<p class="flex">
						<a href="${projects[i].codeUrl}" target="_blank"><img src="img/icon/github.svg" alt="GitHub"></a>
						<a href="${projects[i].liveUrl}" target="_blank"><img src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link"></a>
					</p>
				</div>
			</div> `;
		}
	}
	
	projectsEl.innerHTML = output;
}

renderProjects('all');