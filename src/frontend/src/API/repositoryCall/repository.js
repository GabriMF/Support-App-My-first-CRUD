import apiPayloads from "../APIpayloads/api-payloads";

export default class repository {
url;

constructor(){
    this.url = "http://localhost:8080/support-app-myfirstcrud/api/incidents";
}

async getAll(){
    const response = await fetch(this.url, {method: "GET"});
    let json = await response.json();
    let requests = [];
    for (const request of json){
        console.log(request);
        let temporalRequest = new apiPayloads (
            request.id,
            request.name,
            request.date,
            request.subject,
            request.descripcion
        );
        requests.push(temporalRequest)
    }
    return requests;

}
async create(data){
    const response = await fetch(this.url,{
        method: "POST",
        body:JSON.stringify(data),
    });
}


}