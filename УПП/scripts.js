data = [{
		"pic": "Picture",
		"company": "SemRush",
		"company_href": "Ссылка на компанию",
		"vacancy": "JS-разработчик",
		"vacancy_href": "Ссылка на вакансию",
		"salary": 50000,
		"lang": "JavaScript",
		"exp": 5,
		"city": "Москва"
	}, {
		"pic": "Picture",
		"company": "Google",
		"company_href": "Ссылка на компанию",
		"vacancy": "Генератор идей",
		"href": "Ссылка на вакансию",
		"salary": 150000,
		"lang": "Python",
		"exp": 3,
		"city": "Санкт-Петербург"
	}, {
		"pic": "Picture",
		"company": "Yandex",
		"company_href": "Ссылка на компанию",
		"vacancy": "Рыбатель со стажем",
		"href": "Ссылка на вакансию",
		"salary": 1500000,
		"lang": "Lua",
		"exp": 10,
		"city": "Санкт-Петербург"
	}, {
		"pic": "Picture",
		"company": "FakeCompany",
		"company_href": "Ссылка на компанию",
		"vacancy": "Директор",
		"href": "Ссылка на вакансию",
		"salary": 60000,
		"lang": "C#",
		"exp": 3,
		"city": "Хельсинки"
	}, {
		"pic": "Picture",
		"company": "FakeCompany 2",
		"company_href": "Ссылка на компанию",
		"vacancy": "Уборщик",
		"href": "Ссылка на вакансию",
		"salary": 30000,
		"lang": "С++",
		"exp": 20,
		"city": "Рим"
	},
]

window.addEventListener("load", start);

function start() {
	let con = document.getElementById('main_content');
	let wrap = document.createElement("div");
	wrap.classList.add("panel");
	wrap.classList.add("panel-default");

	for (i = 0; i < data.length; i++) {
		let div = document.createElement("div");
		div.classList.add("panel-heading");
		div.classList.add("main_content_class");
		div.classList.add("col-md-12");
		div.innerHTML = form_result(data[i]);
		con.appendChild(div);
	}

}

function form_result(data) {
	return '<div class="test col-md-8"><dl><dt><a href=' + data.href + '>' + data.vacancy + '</a></dt><dd>Компания: <span class="company_span">' + data.company + '</span></dd></dl> </div> <div class="col-md-4"><h3 class="text-success">' + data.salary + ' \u20BD</h3></div>'
}

// let con = document.getElementById('main_content');
// for(i=0;i<data.length;i++){
//	let div = document.createElement("div");
//	div.classList.add("main_content_class");
//   div.innerHTML = '<dl><dt>' + data[i].vacancy + '</dt><dd>Компания: ' + data[i].name + '</dd></dl>'
//	con.appendChild(div);
// }
