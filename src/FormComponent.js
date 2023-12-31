import React from 'react'

function FormComponent (props){
    return(
            <div>
              <form onSubmit={props.handelSubmit}>
                <label>First Name:</label>
                <input name='fName' value={props.state.fName} onChange={props.handelChange} placeholder='FirstName'></input>
                <br/>
                <label>Last Name:</label>
                <input name='lName' value={props.state.lName} onChange={props.handelChange} placeholder='LastName'></input>
                <br/>
            
                <label>Age:</label>
                <input name='age' value={props.state.age} onChange={props.handelChange} ></input>
                <br/>
      
                <label>Gender:</label><br/>
                <input type='radio' name='gender' value='male' checked= {props.state.gender=== 'male'} onChange={props.handelChange} />Male <br/>
                <input type='radio' name='gender' value='female' checked= {props.state.gender=== 'female'} onChange={props.handelChange} />Female <br/>
                <input type='radio' name='gender' value='other' checked= {props.state.gender=== 'other'} onChange={props.handelChange} />Other <br/>
                
                <label>Location:</label>
                <select name='location' value={props.state.location} onChange={props.handelChange}>
                  <option value='Kokan'>Kokan</option>
                  <option value='Kashmir'>Kashmir</option>
                  <option value='KanyKumari'>KanyKumari</option>
                </select><br/>
      
                <label>Ahaar:</label><br/>
                <input type='checkbox' name='dietSatva' checked={props.state.dietSatva} onChange={props.handelChange} />Satvic<br/>
                <input type='checkbox' name='dietTamas' checked={props.state.dietTamas} onChange={props.handelChange} />Tamsic<br/>
                <input type='checkbox' name='dietRajas' checked={props.state.dietRajas} onChange={props.handelChange} />Rajasic<br/>
      
                <button>Done</button>
              </form>
            </div>
          )
        }
        
export default FormComponent