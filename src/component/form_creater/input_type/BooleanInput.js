function BooleanInput(req_third_option = false){

    return(
        <>
            <label>True</label>
            <input type="checkbox" value={true} />

            {
                req_third_option ? (
                    <>
                        <label>Neutral</label>
                        <input type="checkbox" value={true} />
                    </>
                ) : (
                    <></>
                )
            }

            <label>False</label>
            <input type="checkbox" value={true} />
        </>
    )
}

export default BooleanInput;