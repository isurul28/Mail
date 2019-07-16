import React, { Component } from 'react';

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            //in here put the userID you got from emailjs 
            REACT_APP_EMAILJS_USERID: '*********', 
             //the template ID of the template you created in the emailjs
            templateId: 'template_IldEFUEB',           
            formSubmitted: false,
            feedback: 'Test'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        
    }

    onSubmit(event) {

        event.preventDefault();
    
     
        
        

        const { templateId } = this.state;
        
        
        
                //Getting the variables from the forms
            this.sendFeedback(
                templateId,
                this.sender,
                this.refs.email.value,
                this.state.feedback,
                this.refs.lastname.value,
                this.refs.firstname.value,
                this.refs.phone.value
                
                


            );

            this.setState({
                formSubmitted: true
            });
            
            
        
    }
    
    //In here the data is send to the mailgun server with the correct templateID
    sendFeedback(templateId, senderEmail, receiverEmail, feedback,lastname,firstname,phone) {
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback,
                lastname,
                firstname,
                phone
                
                
                
            })
            .then(res => {
                console.log('MAIL SENT!')
                alert("Mail Sent")
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors if the mail didnt passed 
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

   

    render() {

        return (
            <div>

                <br />



                <div className="row">

                    <form id="myform" className="col s12" onSubmit={this.onSubmit}>
                       
                        <ul className="collection">
                            <li className="collection-item">Enter User Details</li>
                            <li className="collection-item">

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">face</i>
                                    <input id="firstname" type="text" className="validate" 
                                    ref="firstname" required />
                                   

                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">face</i>
                                    <input id="lastname" type="text" className="validate" 
                                    ref="lastname" name="lname" required />
                                   

                                </div>


                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate"
                                     ref="email" required />
                                    
                                </div>

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="phone" type="text" className="validate"
                                     ref="phone"   />
                                    

                                </div>

                                

                             
                            </li>

                        </ul>
                        <input type="submit" className="btn green" value="Confrim" />



                    </form>
                </div>

            </div>
        )
    }
}


export default Form;