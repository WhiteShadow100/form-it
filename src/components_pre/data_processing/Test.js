import fs from 'fs'; 
 
class MyComponent extends React.Component { 
  createJSONFile() { 
    const data = { 
      name: 'John Smith', 
      age: 30, 
      occupation: 'Software Developer' 
    }; 
 
    fs.writeFile('data.json', JSON.stringify(data), (err) => { 
      if (err) { 
        console.error(err); 
        return; 
      } 
      console.log('JSON file created successfully'); 
    }); 
  } 
 
  render() { 
    return ( 
      <button onClick={this.createJSONFile}>Create JSON File</button> 
    ); 
  } 
} 