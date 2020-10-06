const key = "PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr";

//*Get wheater information
async function getWeather(id) {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

//* Get city information 
async function getCity(city) {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

