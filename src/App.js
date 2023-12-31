import React, { Component } from 'react';
import './App.css';
import Form from './FormContainer'


// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       firstName: "",
//       lastName: "",
//       textArea: "hhhh",
//       isFriendly: true,
//       gender: "",
//       favColour: "blue"
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event){
//     const {name, value, type, checked} = event.target;  //Destructuring event.target object
//     type=== "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name] : value }) //In Object if key is string type then write insite "[]""
//   }

//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' name='firstName' value={this.state.firstName} placeholder='First Name' onChange={this.handleChange} /> 
//           <br/>

//           <input type='text' name='lastName' value={this.state.lastName} placeholder='Last Name' onChange={this.handleChange}/>
//           <br/>

//           <textarea name='textArea' value= {this.state.textArea} onChange={this.handleChange} />
//           <br/>

//           <label>
//           <input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange} />Is Friendly?
//           </label>
//           <br/>

//           <label>
//           <input type='radio' name='gender' value='male' checked={this.state.gender=== 'male'} onChange={this.handleChange} />Male
//           </label>
//           <br/>
//           <label>
//           <input type='radio' name='gender' value='female' checked={this.state.gender=== 'female'} onChange={this.handleChange} />Female
//           </label>
//           <br/>
//           <label>
//           <input type='radio' name='gender' value='other' checked={this.state.gender=== 'other'} onChange={this.handleChange} />Other
//           </label>
//           <br/>

//           <label>Favorite Colour</label>
//           <select value={this.state.favColour} name='favColour' onChange={this.handleChange}>
//             <option value='blue'>Blue</option>
//             <option value='red'>Red</option>
//             <option value='pink'>Pink</option>
//             <option vlaue='green'>Green</option>
//           </select>
          
//           <button>Submit</button>     
//           {/* Any button in React Form will act as a Submit button  */}
//         </form>
//         <h1>{this.state.firstName} {this.state.lastName} {this.state.textArea}</h1>
//       </div>
//     )
//   }
// }


//Form Practice- Travel Form
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       fName:"",
//       lName:"",
//       age: null,
//       gender: '',
//       location:'',
//       dietSatva: true,
//       dietTamas: true,
//       dietRajas: true
//     }
//     this.handelChange = this.handelChange.bind(this)
//     this.handelSubmit = this.handelSubmit.bind(this)
//   }

//   handelChange(event){
//     const {name, value, type, checked} = event.target;
//     type=== "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]:value });
//   }
  
//   handelSubmit(){
//     const {fName, lName, age, gender, location, ...diet} = this.state;
//     const d = Object.entries(diet).filter(index => index[1]=== true)
//     alert(`Suswagatam ${fName} ${lName} ${age} ${gender} ${location} ${d.map(index => index[0])}`)
//   }

//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handelSubmit}>
//           <label>First Name:</label>
//           <input name='fName' value={this.state.fName} onChange={this.handelChange} placeholder='FirstName'></input>
//           <br/>
//           <label>Last Name:</label>
//           <input name='lName' value={this.state.lName} onChange={this.handelChange} placeholder='LastName'></input>
//           <br/>
      
//           <label>Age:</label>
//           <input name='age' value={this.state.age} onChange={this.handelChange} ></input>
//           <br/>

//           <label>Gender:</label><br/>
//           <input type='radio' name='gender' value='male' checked= {this.state.gender=== 'male'} onChange={this.handelChange} />Male <br/>
//           <input type='radio' name='gender' value='female' checked= {this.state.gender=== 'female'} onChange={this.handelChange} />Female <br/>
//           <input type='radio' name='gender' value='other' checked= {this.state.gender=== 'other'} onChange={this.handelChange} />Other <br/>
          
//           <label>Location:</label>
//           <select name='location' value={this.state.location} onChange={this.handelChange}>
//             <option value='Kokan'>Kokan</option>
//             <option value='Kashmir'>Kashmir</option>
//             <option value='KanyKumari'>KanyKumari</option>
//           </select><br/>

//           <label>Ahaar:</label><br/>
//           <input type='checkbox' name='dietSatva' checked={this.state.dietSatva} onChange={this.handelChange} />Satvic<br/>
//           <input type='checkbox' name='dietTamas' checked={this.state.dietTamas} onChange={this.handelChange} />Tamsic<br/>
//           <input type='checkbox' name='dietRajas' checked={this.state.dietRajas} onChange={this.handelChange} />Rajasic<br/>

//           <button>Done</button>
//         </form>
//       </div>
//     )
//   }
// }

//Using Container/Component Architecture
function App(){
  return(
    <Form/>
  )
}

export default App