function TextInput({uid, data, setInput}){

    let max_length = data.max_length || 10;
    let placeholder = data.place_holder || '';

    function handler(e){
        if(setInput == null || data == null){ return }

        let temp_val = e.target.value;

        setInput(p => {
            debugger
            let index = p.findIndex(a => uid == a.uid)
            p[index].answer = temp_val;

            return p;
        })        
    }

    return(
        <>
            <input type="text" maxLength={max_length} placeholder={placeholder} onKeyDown={(e) => handler(e)} onBlur={(e) => handler(e)} />
        </>
    )

}

export default TextInput;