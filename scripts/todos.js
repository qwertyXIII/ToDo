//кнопка создания
let create = "close";
document.getElementById("create__icon").addEventListener("click", function () {  
    if (create != "open") {
        document.getElementById("create").classList.add("settings__active");
            document.querySelector('.create__container').style.height = '100%';
            document.querySelector('.create__container').style.opacity = '1';
            document.getElementById('create__icon').style.margin = '10px';
            document.getElementById('create').style.padding = '10px';
            document.getElementById('create').style.paddingLeft = '15px';
            document.getElementById("create__icon").setAttribute("name", "close-circle-outline");
        create = "open";
    } else  {
        document.getElementById("create").classList.remove("settings__active");
        document.querySelector('.create__container').style.height = '0';
        document.querySelector('.create__container').style.opacity = '0';
        document.getElementById('create__icon').style.margin = '0';
        document.getElementById('create').style.padding = '0';
        document.getElementById("create__icon").setAttribute("name", "create-outline");
        create = "close";
    }
});

//удаление всего нахуй))
document.getElementById("todoAllDel").addEventListener("click", function (){
    console.log("все заметки удалены");
    localStorage.clear();
    location.reload();
});


document.getElementById("create__done").addEventListener("click", function () {
    //проверка полей на заполненость
    if (document.getElementById("create__title").value == null || document.getElementById("create__title").value == "") {
        document.getElementById("create__title").style.backgroundColor = "rgba(255,0,0,.3)";
        setTimeout(() => { document.getElementById("create__title").style.backgroundColor = "transparent"; }, 500);
    } else if (document.getElementById("create__text").value == null || document.getElementById("create__text").value == "") {
        document.getElementById("create__text").style.backgroundColor = "rgba(255,0,0,.3)";
        setTimeout(() => { document.getElementById("create__text").style.backgroundColor = "transparent"; }, 500);
    //Если поля заполнены добавляем заметку
    } else {
        //Генерируем случайное число - ид карты (число в теории, может повторится, но шанс очень мал, все же, если это произойдет, тудушки с одиноквым ID будут конфликтовать, при удалении, удалятся обе, плохо будут открываться и тд.)
        let todoId = Math.floor(Math.random() * (9999999999999999 - 1 + 1)) + 1;
        //выводим инфу о тудушки в консоль
        console.log("todo id: " + todoId);
        //добовляем тудушку на сайт
        document.getElementById("todo__grid").insertAdjacentHTML("afterbegin", `<div class="todo theme todo-${todoId}" id="todo-${todoId}"><div class="todo__tools" id="todo__tools-${todoId}"> <ion-icon class="todo__tools__icon" id="todo__close-${todoId}" name="close-circle-outline" onclick=' document.getElementById("todo-${todoId}").classList.remove("todo__active"); document.getElementById("todo__text-${todoId}").classList.remove("todo__text-active"); document.getElementById("todo__tools-${todoId}").classList.remove("todo__tools-active"); document.getElementById("todo__close-${todoId}").classList.remove("todo__tools__icon-active"); document.getElementById("todo__delete-${todoId}").classList.remove("todo__tools__icon-active"); document.getElementById("todo-${todoId}").style.justifyContent = "center" '></ion-icon> <h2 class="todo__title" id="todo__title-${todoId}" onclick='document.getElementById("todo-${todoId}").classList.add("todo__active"); document.getElementById("todo__text-${todoId}").classList.add("todo__text-active"); document.getElementById("todo__tools-${todoId}").classList.add("todo__tools-active"); document.getElementById("todo__close-${todoId}").classList.add("todo__tools__icon-active"); document.getElementById("todo__delete-${todoId}").classList.add("todo__tools__icon-active"); document.getElementById("todo-${todoId}").style.justifyContent = "start"'> ${document.getElementById("create__title").value} </h2> <ion-icon class="todo__tools__icon" id="todo__delete-${todoId}" name="trash-outline" onclick="document.getElementById('todo-${todoId}').remove(); localStorage.removeItem('todo-${todoId}');"></ion-icon> </div> <div class="todo__hidden-text"></div> <p class="todo__text" id="todo__text-${todoId}"> ${document.getElementById("create__text").value} </p> </div> </div>`);
        //сохраняем в память пк\телефона (в локал сторейдж)
        localStorage.setItem('todo-' + todoId, `<div class="todo theme todo-${todoId}" id="todo-${todoId}"><div class="todo__tools" id="todo__tools-${todoId}"> <ion-icon class="todo__tools__icon" id="todo__close-${todoId}" name="close-circle-outline" onclick=' document.getElementById("todo-${todoId}").classList.remove("todo__active"); document.getElementById("todo__text-${todoId}").classList.remove("todo__text-active"); document.getElementById("todo__tools-${todoId}").classList.remove("todo__tools-active"); document.getElementById("todo__close-${todoId}").classList.remove("todo__tools__icon-active"); document.getElementById("todo__delete-${todoId}").classList.remove("todo__tools__icon-active"); document.getElementById("todo-${todoId}").style.justifyContent = "center" '></ion-icon> <h2 class="todo__title" id="todo__title-${todoId}" onclick='document.getElementById("todo-${todoId}").classList.add("todo__active"); document.getElementById("todo__text-${todoId}").classList.add("todo__text-active"); document.getElementById("todo__tools-${todoId}").classList.add("todo__tools-active"); document.getElementById("todo__close-${todoId}").classList.add("todo__tools__icon-active"); document.getElementById("todo__delete-${todoId}").classList.add("todo__tools__icon-active"); document.getElementById("todo-${todoId}").style.justifyContent = "start"'> ${document.getElementById("create__title").value} </h2> <ion-icon class="todo__tools__icon" id="todo__delete-${todoId}" name="trash-outline" onclick="document.getElementById('todo-${todoId}').remove(); localStorage.removeItem('todo-${todoId}');"></ion-icon> </div> <div class="todo__hidden-text"></div> <p class="todo__text" id="todo__text-${todoId}"> ${document.getElementById("create__text").value} </p> </div> </div>`);
    }
});

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));  //задержка в развитии JS
}

//Загрузка всех тудушек из локал сторейджа
window.onload = async function() {
    for(let key,i=0;i<localStorage.length;i++) key=localStorage.key(i),document.getElementById("todo__grid").insertAdjacentHTML("beforeend", localStorage.getItem(key) );
    
 };
