import { FormControl } from "@angular/forms";
import { Base } from "./Base";
import { Person } from "./Person";

export interface Events {
    id : string,
    name : string,
    start_date : Date,
    end_date : Date,
    status : string,
    location: string,
    organizerId: string,
    description : string;
}