import {  City }  from 'country-state-city';

let allCityList = City.getCitiesOfCountry('IN');
let cityList = []; 
let allCities = []; 

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
 function getCityByName(param){
   allCityList.forEach(element => {
    var data = Object.values(element);
    var temp = filterItems(data,param);
    if (temp.length > 0){
      cityList = temp;
    }

  });

  return cityList;
 
}

 function getCity(){
  allCityList.forEach(element => {
    allCities.push(element.name);
  });
  return allCities;
 
}

export { getCity,getCityByName};



