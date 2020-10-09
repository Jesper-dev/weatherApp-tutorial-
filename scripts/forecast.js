class Forecast {
    constructor() {
        this.key = "PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        //*Object shorthand notation, om både namnet och värdet är lika så kan man skriva såhär
        return { cityDets, weather };
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}
