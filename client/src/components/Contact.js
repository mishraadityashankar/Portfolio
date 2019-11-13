import React, { Component } from 'react';
import axios from 'axios';
class Contact extends Component {

	constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage= this.onChangeMessage.bind(this);
       
        
        
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          Name : '',
          Email : '',
          Subject : '',
          Message: '',
          NameError : '',
          EmailError : '',
          SubjectError : '',
          MessageError: ''
        
        }
    }
    onChangeName(e){
        this.setState({
            Name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }
    onChangeSubject(e){
        this.setState({
            Subject: e.target.value
        });
    }
    onChangeMessage(e){
        this.setState({
            Message:e.target.value
        });
    }
 
    validate = () => {
      let isError=false;
      const errors = {
          NameError: "",
          EmailError: "",
          SubjectError: "",
          MessageError: ""
          
      };
  
    
        if (this.state.Name<1) {
            isError = true;
            errors.NameError = "Requires valid name";
         
        }
    
        if (this.state.Email<1) {
            isError = true;
            errors.EmailError = "Requires valid email address";
         
        }

        if (this.state.Subject<1) {
            isError = true;
            errors.SubjectError = "Requires valid subject";
         
        }

      
        if (!this.state.Message) {
            isError = true;
            errors.MessageError = "Requires valid Message";
        }
        this.setState({
            ...this.state,
            ...errors
          });

     
        console.log("is validated:" +this.state.isValidated); 
        return isError;
      };
    onSubmit(e){
      e.preventDefault();
      const err = this.validate();
      
    if (!err) {
     
  
      const newMsg={
  
          Name: this.state.Name,
          Email :this.state.Email,
          Subject :this.state.Subject,
          Message: this.state.Message,
          
       
      }
        

      axios.post('/addmessage', newMsg)
      .then().catch(err=> console.log("nahi hua"));
  
       
  
      this.setState({
		Name : '',
		Email : '',
		Subject : '',
		Message: '',
		NameError : '',
		EmailError : '',
		SubjectError : '',
		MessageError: ''
	  
	  })
    }
    // window.location.reload();
    alert("Thanku");
   
  }

    render() {
        // let modalId,modalClass;
    
        // if (this.state.Name<1 || this.state.Email<1 || this.state.Subject<1 || this.state.Message<1) {
        //   modalId="";
        //   modalClass=""
        // } else {
        //   modalId="#Modal2";
        //   modalClass="modal";
        // }
        return (
            <div>
                <section class="colorlib-contact" data-section="contact">
				<div class="colorlib-narrow-content">
					<div class="row" >
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Get in Touch</span>
							<h2 class="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div class="row ">
						<div class="col-md-5">
							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-globe-outline"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="#">adityashankarmishra3@gmail.com</a></p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-map"></i>
								</div>
								<div class="colorlib-text">
									<p>C 22/74 Kabir Chaura Varanasi.</p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-phone"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="tel://">+91 9260970643</a></p>
								</div>
							</div>
						</div>
						<div class="col-md-7 col-md-push-1" >
							<div class="row" >
								<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
									<form onSubmit={this.onSubmit}>
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Name" value={this.state.Name} onChange={this.onChangeName}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.NameError}
                                            </div>
                                        </div>
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Email"value={this.state.Email} onChange={this.onChangeEmail}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.EmailError}
                                            </div>
                                        </div>
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Subject" value={this.state.Subject} onChange={this.onChangeSubject}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.SubjectError}
                                            </div>
                                        </div>
										<div class="form-group">
											<textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message" value={this.state.Message} onChange={this.onChangeMessage}></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.MessageError}
                                            </div>
                                        </div>
										<div class="form-group">
											<input type="submit" class="btn btn-primary " value="Send Message"  />
										    
                                        </div>
                                        
                                    {/* <div className="modal" id="Modal2">
                                    <div className="modal-dialog">
                                            <div className="modal-content">
                                            
                                            
                                                <div className="modal-body">
                                                 <h4 className="text-primary text-center">Thankyou for submission :)</h4>
                                                </div>
                                                
                                            
                                                <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div> */}
                                   
									</form>
									
								</div>
								
							</div> 
						</div>
					</div>
				</div>
			</section>
            </div>
        );
    }
}

export default Contact;