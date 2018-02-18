import React from "react";

const NewAccCard = props =>
    <div className="card">
        <div className="card-title">
            <h4>Create New Account</h4>
        </div>
        <div className="card-content">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <input name="selected" value="Landlord" onChange={props.onChange} type="radio" id="landlord" checked={props.selected==="Landlord"} />
                            <label htmlFor="landlord">Landlord</label>
                        
                            <input name="selected" value="Tenant" onChange={props.onChange} type="radio" id="tenant" checked={props.selected==="Tenant"} />
                            <label htmlFor="tenant">Tenant</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="name" value={props.name || ""} onChange={props.onChange} id="full_name" type="text" className="validate" />
                            <label htmlFor="full_name">Full Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="phone" value={props.phone || ""} onChange={props.onChange} id="phone" type="text" className="validate" />
                            <label htmlFor="phone">Phone #</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="address1" value={props.address1 || ""} onChange={props.onChange} id="address1" type="text" className="validate" />
                            <label htmlFor="address1">Address 1</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="address2" value={props.address2 || ""} onChange={props.onChange} id="address2" type="text" className="validate" />
                            <label htmlFor="address2">Address 2</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input name="city" value={props.city || ""} onChange={props.onChange} id="city" type="text" className="validate" />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s4">
                            <input name="state" value={props.state || ""} onChange={props.onChange} id="state" type="text" className="validate" />
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="input-field col s4">
                            <input name="zip" value={props.zip || ""} onChange={props.onChange} id="zip" type="text" className="validate" />
                            <label htmlFor="zip">Zip Code</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="email" value={props.email || ""} onChange={props.onChange} id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="password" value={props.password || ""} onChange={props.onChange} id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
        <div className="card-action">
            <button className="waves-effect waves-teal btn-large" onClick={props.onClick}><i className="material-icons left">save</i>Save</button>
        </div>
    </div>;

export default NewAccCard;