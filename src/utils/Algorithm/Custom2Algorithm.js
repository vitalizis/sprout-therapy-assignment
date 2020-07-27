import {customRound} from "../customRound/customRound";

class Custom2Algorithm{
    constructor() {
        this.inputData = {};
    }
    calculateH(inputData){
        const {AValue,BValue,CValue} = inputData;
        if(AValue&&!BValue&&CValue){
            return 'M';
        }else if(AValue&&BValue&&CValue){
            return 'P';
        }else if(AValue&&BValue&&!CValue){
            return 'T'
        }else {
            return "error";
        }
    }

    calculateK(calculatedH, inputData){
        const {DValue,EValue,FValue} = inputData;
        if(calculatedH === 'M'){
            return customRound(FValue) + customRound(DValue) + (customRound(DValue) * customRound(EValue) / 100)
        }else if(calculatedH === 'P'){
            return customRound(DValue) + (customRound(DValue) * (customRound(EValue) - customRound(FValue)) / 25.5);
        }else if(calculatedH === 'T'){
            return customRound(DValue) - (customRound(DValue) * customRound(FValue) / 30);
        }
    }
    getResult(inputData) {
        this.inputData = inputData;
        console.log('custom2');
        return {
            h: this.calculateH(this.inputData),
            k:this.calculateK(this.calculateH(this.inputData),this.inputData),
        }
    }
}

export default Custom2Algorithm;
