import { Base } from "./Base";

export interface Person extends Base{
    name : string,
    surname : string,
    role : string;
}