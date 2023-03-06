import { useEffect, useState } from 'react';
import defaultForm from './../default_form.json'
import BooleanInput from './input_type/BooleanInput';
import DatetimeInput from './input_type/DatetimeInput';
import DescriptiveInput from './input_type/DescriptiveInput';
import NumberInput from './input_type/NumberInput';
import OptionalInput from './input_type/OptionalInput';
import TextInput from './input_type/TextInput';


function FormCreater(){

    const [userInput, setUserInput] = useState([]);

    let return_data = [];

    // creates form input holder
    useEffect(() => {
        let temp = [];
        defaultForm.forEach((a, i) => {
            temp.push({
                uid: i,
                question: a.question,
                answer: a.data.value
            })
        });

        setUserInput(temp)
    }, [])

    defaultForm.forEach((a, i) => {

        // giving a unique id and default value to the form's components
        a["uid"] = i;

        let temp_data = []
    
        temp_data.push(<h3>{a.question}</h3>)

        if(a.type == 1){
            temp_data.push(<TextInput uid={a.uid} data={a.data} setInput={setUserInput} />)
        }else if(a.type == 2){
            temp_data.push(<NumberInput data={a.data} />)
        }else if(a.type == 3){
            temp_data.push(<BooleanInput data={a.data} />)
        }else if(a.type == 4){
            temp_data.push(<DatetimeInput data={a.data} />)
        }else if(a.type == 5){
            temp_data.push(<OptionalInput data={a.data} />)
        }else if(a.type == 6){
            temp_data.push(<DescriptiveInput data={a.data} />)
        }
                
        return_data.push(temp_data)
        return_data.push(<hr />)

        
    })

    function prepareFinalData(){
        console.log(userInput)
    }

    return_data.push(<button onClick={() => {prepareFinalData()}}>Download</button>)

    return (return_data);
}

export default FormCreater;