API LINK
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric

API Data Structure

{
"coord": {
"lon": 80.2785,
"lat": 13.0878
},
"weather": [
{
"id": 721,
"main": "Haze",
"description": "haze",
"icon": "50d"
}
],
"base": "stations",
"main": {
"temp": 28,
"feels_like": 29.56,
"temp_min": 26.72,
"temp_max": 28.33,
"pressure": 1014,
"humidity": 61,
"sea_level": 1014,
"grnd_level": 1013
},
"visibility": 4000,
"wind": {
"speed": 1.34,
"deg": 145,
"gust": 1.34
},
"clouds": {
"all": 40
},
"dt": 1768801187,
"sys": {
"type": 2,
"id": 2093935,
"country": "IN",
"sunrise": 1768784728,
"sunset": 1768825986
},
"timezone": 19800,
"id": 1264527,
"name": "Chennai",
"cod": 200
}
