import { Teams } from "../teams/teams";


export class Project {
    id!:number;
    name!:string;
    priority!:string;
    teams!: Teams;
}