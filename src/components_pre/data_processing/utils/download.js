function download(data = [], fileName){

    let final_data = '';

    // prepares final data for converting to csv
    data.forEach(a => {
        final_data += a.join(', ');
        final_data += '\n';
    })

    // converting the prepared data to binary
    var file = new Blob([final_data], {type:"text"});
    // creating anchor tag
    let anchor = document.createElement("a");
    // converting to downloadable object
    anchor.href = URL.createObjectURL(file);
    // setting the file name
    anchor.download = fileName;
    // downloading the file
    anchor.click()
}

export default download;