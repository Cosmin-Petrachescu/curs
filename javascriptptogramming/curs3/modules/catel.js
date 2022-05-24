import {Animal} from "../modules/Animal.js";
class Catel extends Animal{
    caineRau;
    constructor(greutate,rau){
        super(greutate);
        this.caineRau = rau
    }
    musca(){
        if(this.caineRau){
            console.log(`Atentie caine rau`);
        }
        else{
            console.log(`Acest catel poate fi mangaiat.`);
        }
    }
}

export {Catel}