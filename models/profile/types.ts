import { Schema } from "mongoose";

export enum mastery {
    "basic", 
    "middle", 
    "advanced"
  }

  
  //Interfaces for docs and subdocs
  export interface IProfile {
    name: string;
    description: string;
    age?: number;
    skills?: Schema[];
    contact?: Schema[];
  }
  
  export interface ISkill {
    skillname: string;
    mastery: string;
  }
  
  export interface IContact {
    type: string;
    content: string;
  }
  