import { Base } from "./Base";
import { Person } from "./Person";

export interface Events {
    id : string,
    name : string,
    start_date : Date,
    end_date : Date,
    status : string,
    location : string,
    organizer: Person,
    description : string;
}