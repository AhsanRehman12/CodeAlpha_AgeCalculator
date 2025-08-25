function calculateAge() {
  let date = document.getElementById('date').value
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value


  const today = new Date();
  let currDay = today.getDate()
  let currYear = today.getFullYear()
  let currMonth = today.getMonth() + 1

  if (date < 0 || date > 31) {
    document.getElementById('date').innerHTML = 'Enter a valid date'
    document.getElementById('datetitle').style.color = 'red'
    document.getElementById('date').style.border = '2px solid red'
  }
  else if (month < 0 || month > 12) {
    document.getElementById('month').innerHTML = 'Enter a valid month'
    document.getElementById('monthtitle').style.color = 'red'
    document.getElementById('month').style.border = '2px solid red'
    
  }
  else if (year < 0 || year > currYear) {
    document.getElementById('year').innerHTML = 'Enter a valid year';
    document.getElementById('yeartitle').style.color = 'red'
    document.getElementById('year').style.border = '2px solid red'
  }

  else {
    let ageYear = currYear - year
    let ageMonth = currMonth - month
    let ageDay = currDay - date
    if (ageDay < 0) {
      const prevMonth = new Date(currYear, currMonth - 1, 0).getDate()
      ageDay += prevMonth;
      ageMonth -= 1
    }
    if (ageMonth < 0) {
      ageMonth += 12;
      ageYear -= 1
    }
    document.getElementById('age').innerHTML = `Your age is ${ageYear} Years ${ageMonth} month and ${ageDay} days`
  }

}
