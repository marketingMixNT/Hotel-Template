//DATE PICKER DYNAMIC DATA


const startDateLabel = document.querySelector('#start_date_label')
const startDateInput = document.querySelector('#start_date')

const endDateLabel = document.querySelector('#end_date_label')
const endDateInput = document.querySelector('#end_date')

const footerYear = document.querySelector('#footer_year')

const today = new Date()

const year = today.getFullYear()



    const formattedDate = (date) =>{

         return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
    } 


startDateInput ? startDateInput.value =formattedDate(today) : ''
endDateInput ? endDateInput.value =formattedDate(today) : ''





const setTodaysDate = () => {
    const months = ["STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"];
    
    let today = new Date();
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + 7); // Dodajemy 7 dni do obecnej daty

    const formattedToday = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    const formattedFutureDate = `${months[futureDate.getMonth()]} ${futureDate.getDate()}, ${futureDate.getFullYear()}`;

    startDateLabel ? startDateLabel.innerHTML = formattedToday : ''
    endDateLabel ?  endDateLabel.innerHTML = formattedFutureDate : ''
};

setTodaysDate();

footerYear ? footerYear.innerHTML = year : ''


