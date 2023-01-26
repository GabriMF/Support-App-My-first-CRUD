import repository from "./repositoryCall/repository";

export default class repositoryAPI{
    api;
    constructor(api) {
        this.api = api;
    }
    chooseApi(){
        if (this.api == "repository") return new repository();
    }
}