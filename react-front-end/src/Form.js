import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message has been sent to Julian.");
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
          <div className="col-sm-4 offset-sm-4 form">
            <span id="pro-header-2">Feel free to send me an email.</span>
            <br></br>
            <br></br>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                  <label for="name" style={{color: 'white'}}>Name</label>
                  <br></br>
                  <input type="text" className="form-control" id="name" />
              </div>
              <br></br>
              <div className="form-group">
                  <label for="exampleInputEmail1" style={{color: 'white'}}>Email</label>
                  <br></br>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <br></br>
              <div className="form-group">
                  <label for="message" style={{color: 'white'}}>Message</label>
                  <br></br>
                  <textarea className="form-control" rows="6" id="message"></textarea>
              </div>
              <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )
    }
}

export default Form;
