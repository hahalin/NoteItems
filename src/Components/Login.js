import React, { Component } from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../actions';

class Login extends Component {

    onSubmit=(formProps)=>{
        console.log(formProps);
        this.props.login(formProps,this.callback);
    }

    callback=()=>{
        alert('callback');
    }

    render(){
     
        const {handleSubmit}=this.props;
     
        return (
            <section className="content">
            <div className='row'>
                <div className="col-md-10">
                    <div className="box box-primary">
                        <div className="box-header">
                            <h3 className="box-title">Login</h3>
                        </div>
                        <div className="box-body">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <fieldset>
                                    <label>帳號</label>
                                    <Field
                                        name="nm" type="text"
                                        component="input"
                                        autoComplete="none"
                                    >
                                    </Field>
                                </fieldset>
                                <fleldset>
                                    <label>密碼</label>
                                    <Field
                                        name="pwd" type="password"
                                        component="input"
                                        autoComplete="none"
                                    >
                                    </Field>
                                </fleldset>
                                <div>
                                    {this.props.errorMessage}
                                </div>
                                <fieldset>
                                    <input type="submit" value="登入"></input>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

function mapStateToProps(state){
    return {
        errorMessage:state.auth.errorMessage
    }
}


export default compose(
    connect(mapStateToProps,actions),
    reduxForm({form:'login'})
)(Login);