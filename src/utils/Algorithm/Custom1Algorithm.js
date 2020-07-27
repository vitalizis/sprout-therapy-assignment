import BaseAlgorithm from './BaseAlgorithm';
import {customRound} from "../customRound/customRound";
class Custom1Algorithm extends BaseAlgorithm{
    calculateK(calculatedH, inputData){
        const {DValue,EValue,FValue} = inputData;
        if(calculatedH === 'M'){
            return customRound(DValue) + (customRound(DValue) * customRound(EValue) / 10);
        }else if(calculatedH === 'P'){
            return (2 * customRound(DValue) + (customRound(DValue) * customRound(EValue) / 100))
        }else if(calculatedH === 'T'){
            return customRound(DValue) - (customRound(DValue) * customRound(FValue) / 30);
        }
    }

    getResult(inputData) {
        this.inputData = inputData;
        console.log('custom1');
        return {
            h: super.calculateH(this.inputData),
            k:this.calculateK(this.calculateH(this.inputData),this.inputData),
        }
    }
}

export default Custom1Algorithm;
