import {defineStore} from 'pinia';
import repositoryAPI from '../API/repositoryAPI';
export const APIstore = defineStore({
    id:"repository",
    state: ()=>({
        Requests: [],
    }),
    actions:{
        async RequestAsigned(){
            const repositoryPetition = new repositoryAPI("request");
            let api = repositoryPetition.chooseApi();

            console.log(api);
            this.Requests = await api.getAll();
        }
    }
})