import React, {Component} from 'react'
import FormComponent from './FormComponent'

class Form extends Component{
    constructor(){
      super()
      this.state={
        fName:"",
        lName:"",
        age: null,
        gender: '',
        location:'',
        dietSatva: true,
        dietTamas: true,
        dietRajas: true
      }
      this.handelChange = this.handelChange.bind(this)
      this.handelSubmit = this.handelSubmit.bind(this)
    }
  
    handelChange(event){
      const {name, value, type, checked} = event.target;
      type=== "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]:value });
    }
    
    handelSubmit(){
      const {fName, lName, age, gender, location, ...diet} = this.state;
      const d = Object.entries(diet).filter(index => index[1]=== true)
      alert(`Suswagatam ${fName} ${lName} ${age} ${gender} ${location} ${d.map(index => index[0])}`)
    }
  
    render(){
        return(
            <FormComponent state={this.state} handelChange={this.handelChange} handelSubmit={this.handelSubmit} />
        )
    }
      
  }

  export default Form