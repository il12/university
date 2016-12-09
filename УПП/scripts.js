data = [{
		"pic": "./pictures/SemRush.png",
		"company": "SemRush",
		"company_href": "Ссылка на компанию 1",
		"vacancy": "JS-разработчик",
		"href": "Ссылка на вакансию 1",
		"salary": 50000,
		"lang": "JavaScript",
		"exp": 5,
		"city": "Москва"
	}, {
		"pic": "./pictures/Google.png",
		"company": "Google",
		"company_href": "Ссылка на компанию 2",
		"vacancy": "Генератор идей",
		"href": "Ссылка на вакансию 2",
		"salary": 150000,
		"lang": "Python",
		"exp": 3,
		"city": "Санкт-Петербург"
	}, {
		"pic": "./pictures/Yandex.png",
		"company": "Yandex",
		"company_href": "Ссылка на компанию 3",
		"vacancy": "Рыбатель со стажем",
		"href": "Ссылка на вакансию 3",
		"salary": 1500000,
		"lang": "Lua",
		"exp": 10,
		"city": "Санкт-Петербург"
	}, {
		"pic": "./pictures/FakeCompany.png",
		"company": "FakeCompany",
		"company_href": "Ссылка на компанию 4",
		"vacancy": "Директор",
		"href": "Ссылка на вакансию 4",
		"salary": 60000,
		"lang": "C#",
		"exp": 3,
		"city": "Хельсинки"
	}, {
		"pic": "./pictures/FakeCompany_2.png",
		"company": "FakeCompany 2",
		"company_href": "Ссылка на компанию 5",
		"vacancy": "Уборщик",
		"href": "Ссылка на вакансию 5",
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

		div.addEventListener("click",transfer_to.bind(null,data[i].href));
		con.appendChild(div);
	}

}

function transfer_to(link) {
 window.location = link;
}

function form_result(data) {
	return '<div class="test col-md-8"><div class="col-md-3"><img src="' + data.pic + '"></div><dl><dt>' + data.vacancy + '</a></dt><dd>Компания: <span class="company_span">' + data.company + '</span></dd></dl> </div> <div class="col-md-4"><h3 class="text-success">' + data.salary + ' \u20BD</h3></div>'
}


