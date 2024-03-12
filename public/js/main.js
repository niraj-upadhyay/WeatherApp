const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

// const temp = document.getElementById('temp');

const temp_real_val = document.getElementById('temp_real_val');

const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

// humidity

// const datahideh = document.querySelector('.humidity');

// const humi = document.getElementById('humi');

// console.log(humi)

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
        // datahideh.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=7abbf5cf95d7042bf22e4199307fc899`;
            const response = await fetch(url); 
            const data = await response.json();

            // console.log(data); 
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;


            temp_real_val.innerText = (arrData[0].main.temp - 273.15).toFixed(2);


            // console.log(arrData);
            console.log(arrData[0].main.humidity);
            console.log((arrData[0].main.temp - 273.15).toFixed(2));

            // humi.innerText = `${arrData[0].main.humidity}%`;
            


           

            // (orgVal.main.temp - 273.15).toFixed(2));

            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;


            if(tempMood== "Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color: #eccc68; font-size: 1em;''></i>"
            }
            else if(tempMood== "Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style='color: #f1f2f6; font-size: 1em;''></i>"
            }
            else if(tempMood== "Rain")
            {
                temp_status.innerHTML= "<i class='fas fa-rain' style='color: #a4b0be; font-size: 1em;''></i>"
            }
            else
            {
                temp_status.innerHTML= "<i class='fas fa-sun' style='color: #eccc68; font-size: 1em;''></i>"
            }
    
            datahide.classList.remove('data_hide');
            // datahideh.classList.add('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
            // datahideh.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);

