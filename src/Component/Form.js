import React, { Component } from 'react';

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            
            REACT_APP_EMAILJS_USERID: 'user_17Y3yksLiJyYnOXq04djD',
            templateId: 'template_IldEFUEB',
            receiverEmail: '',
            formSubmitted: false,
            feedback: 'Test'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        
    }

    onSubmit(event) {

        event.preventDefault();

        const feedback = {
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            
        }
        
        

        const { templateId, receiverEmail } = this.state;
        
        
        

            this.sendFeedback(
                templateId,
                this.sender,
                this.refs.email.value,
                this.state.feedback,
                this.refs.lastname.value,
                this.refs.firstname.value,
                
                


            );

            this.setState({
                formSubmitted: true
            });
            
            
        
    }
    
    
    sendFeedback(templateId, senderEmail, receiverEmail, feedback,lastname,firstname,cost) {
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback,
                lastname,
                firstname
                
                
                
            })
            .then(res => {
                console.log('MAIL SENT!')
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
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
                                    <input id="firstname" type="text" className="validate" ref="firstname" required />
                                    <label htmlFor="firstname">Frist Name</label>

                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">face</i>
                                    <input id="lastname" type="text" className="validate" ref="lastname" name="lname" required />
                                    <label htmlFor="lastname">Last Name</label>

                                </div>


                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" ref="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="password" type="password" className="validate" ref="password"   />
                                    <label htmlFor="password">Password</label>

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