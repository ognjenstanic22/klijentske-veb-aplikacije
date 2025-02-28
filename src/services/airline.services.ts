import { AirlineModel } from "../models/airline.model";

export class AirlineServivce {
    static getAirline(): AirlineModel[]{
        return [
            {
                id: 1, 
                name: 'Air Serbia',
                countryOfOrigin: 'Serbia',
                website: 'https://www.airserbia.com/'
            },

            {
                id: 2, 
                name: 'Fly Emirates',
                countryOfOrigin: 'UAE',
                website: 'https://www.emirates.com/us/english/'
            },

            {
                id: 3, 
                name: 'Lufthansa',
                countryOfOrigin: 'Germany',
                website: 'https://www.lufthansa.com/'
            },

            {
                id: 4, 
                name: 'Turkish airlines',
                countryOfOrigin: 'Turkey',
                website: 'https://www.turkishairlines.com/'
            }
        ]
    }
}