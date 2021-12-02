import axios from "axios";

//Get all Projects
export async function getAllProjects(){
    const response = await axios.get(`http://localhost:3000/api/projects`);
    const data = await  response.data;   
    return data;
}

//Get project by id



//Get Profile