// Вывод даты
let day = new Date().getDate() // текущий день
let month = new Date().getMonth() // текущий месяц
let month_text = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
let year = new Date().getFullYear() // текущий год
let date = `${day} ${month_text[month]} ${year}` // готовая строка
document.querySelector('.my-date').textContent = date // поместить строку с датой на страницу

// День недели
let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА']
let day_week = new Date().getDay() // день недели
document.querySelector('.my-day').textContent = days[day_week]
console.log(day_week)

// Видео по временам года

switch (month) {
  case 11, 0, 1:
  // зима
  document.querySelector('source').setAttribute('src', 'media/winter.mp4')
  case 2, 3, 4:
  // весна
  document.querySelector('source').setAttribute('src', 'media/spring.mp4')
  case 5, 6, 7:
  // лето
  document.querySelector('source').setAttribute('src', 'media/summer.mp4')
  case 8, 9, 10:
  // осень
  document.querySelector('source').setAttribute('src', 'media/autumn.mp4')
  default:
    console.log("Error")
}


let table = document.querySelector('.table') // таблица для вывода разсписания
for(let i=0; i<7; i++) {
switch(day_week) { // по дням недели
  case i:
  for (let k in schedule[3]) {
    table.insertAdjacentHTML("beforeend", `<tr>
  <td>${k}</td>
  <td><pre>${schedule[i][k][0]}</pre></td>
  <td><pre>${schedule[i][k][1]}</pre></td>
  <td><pre>${schedule[i][k][2]}</pre></td>
  <td><pre>${schedule[i][k][3]}</pre></td>
  <td><pre>${schedule[i][k][4]}</pre></td>
  <td><pre>${schedule[i][k][5]}</pre></td>
  <td><pre>${schedule[i][k][6]}</pre></td>
  <td><pre>${schedule[i][k][7]}</pre></td>
</tr>`)
    }
  }
}
