//кнопка search 
document.getElementById("searchBut").addEventListener("click", function () { 
  document.getElementById("search").classList.add("search__active"); 
  document.getElementById("searchClose").classList.add("search__close-active"); 
  document.getElementById("searchInput").classList.add("search__input-active"); 
  document.getElementById("searchBut").classList.remove("search__button-active"); 
}); 
 
document.getElementById("searchClose").addEventListener("click", function () { 
  document.getElementById("search").classList.remove("search__active"); 
  document.getElementById("searchClose").classList.remove("search__close-active"); 
  document.getElementById("searchInput").classList.remove("search__input-active"); 
  document.getElementById("searchBut").classList.add("search__button-active"); 
}); 
                   
 
//search 
var lastResFind=""; // последний удачный результат 
var copy_page=""; // копия страницы в ихс одном виде 
function TrimStr(s) { 
     s = s.replace( /^\s+/g, ''); 
  return s.replace( /\s+$/g, ''); 
} 
function FindOnPage(searchInput) {//ищет текст на странице, в параметр передается ID поля для ввода 
  var obj = window.document.getElementById(searchInput); 
  var textToFind; 
  
  if (obj) { 
    textToFind = TrimStr(obj.value);//обрезаем пробелы 
  } else { 
    alert("Введенная фраза не найдена"); 
    return; 
  } 
  if (textToFind == "") { 
    alert("Вы ничего не ввели"); 
    return; 
  } 
  
  if(document.body.innerHTML.indexOf(textToFind)=="-1") 
  alert("Ничего не найдено, проверьте правильность ввода!"); 
  
  if(copy_page.length>0) 
        document.body.innerHTML=copy_page; 
  else copy_page=document.body.innerHTML; 
 
  
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем; 
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки 
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению 
}