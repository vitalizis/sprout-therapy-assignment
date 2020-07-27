import React from "react";
import './style.css';
import {useForm} from 'react-hook-form';
import AlgorithmManager from '../../utils/Algorithm/AlgorithmManager';
import BaseAlgorithm from '../../utils/Algorithm/BaseAlgorithm';
import Custom1Algorithm from '../../utils/Algorithm/Custom1Algorithm';
import Custom2Algorithm from '../../utils/Algorithm/Custom2Algorithm';

const InputForm = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const {setOutput} = props;
    const onSubmit = (data) => {

        const strategyManager = new AlgorithmManager();
        const strategy1 = new BaseAlgorithm();
        const strategy2 = new Custom1Algorithm();
        const strategy3 = new Custom2Algorithm();

        if (data.modeRules === "base") {
            strategyManager.strategy = strategy1;
            setOutput(strategyManager.getResult(data))
        }

        if (data.modeRules === "custom1") {
            strategyManager.strategy = strategy2;
            setOutput(strategyManager.getResult(data))
        }

        if (data.modeRules === "custom2") {
            strategyManager.strategy = strategy3;
            setOutput(strategyManager.getResult(data))
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="InputTitle">Mode rules</div>
            Base<input name="modeRules" type="radio" value="base" defaultChecked={true} ref={register({required: true})}/>
            Custom 1<input name="modeRules" type="radio" value="custom1" ref={register({required: true})}/>
            Custom 2<input name="modeRules" type="radio" value="custom2" ref={register({required: true})}/>
            <div className="InputTitle">Enter boolean values</div>
            <div>
                A: <input type="checkbox" name="AValue" ref={register}/>
            </div>
            <div>
                B: <input type="checkbox" name="BValue" ref={register}/>
            </div>
            <div>
                C: <input type="checkbox" name="CValue" ref={register}/>
            </div>
            <div className="InputTitle">Enter number values. The first number can be float</div>
            <div className="numberInput">
                D: <input name="DValue" defaultValue={0} type="number" step="any" ref={register({required: true})}/>
            </div>
            <div className="numberInput">
                E: <input name="EValue" defaultValue={0} type="number" ref={register({required: true})}/>
            </div>
            <div className="numberInput">
                F: <input name="FValue" defaultValue={0} type="number" ref={register({required: true})}/>
            </div>
            <br/>
            <input className="submit-button" type="submit"/>
        </form>
    )
}

export default InputForm;
