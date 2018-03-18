import React from "react";

const UserUpdateForm = props =>
    <div className="card">
        <div className="card-title">
            <h4>Update Profile</h4>
        </div>
        <div className="card-content">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="name" value={props.name || ""} onChange={props.onChange} id="full_name" type="text" className="validate" />
                            <label htmlFor="full_name" className="active">Full Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="phone" value={props.phone || ""} onChange={props.onChange} id="phone" type="text" className="validate" />
                            <label htmlFor="phone" className="active">Phone #</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="address1" value={props.address1 || ""} onChange={props.onChange} id="address1" type="text" className="validate" />
                            <label htmlFor="address1" className="active">Address 1</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="address2" value={props.address2 || ""} onChange={props.onChange} id="address2" type="text" className="validate" />
                            <label htmlFor="address2" className="active">Address 2</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input name="city" value={props.city || ""} onChange={props.onChange} id="city" type="text" className="validate" />
                            <label htmlFor="city" className="active">City</label>
                        </div>
                        <div className="input-field col s4">
                            <input name="state" value={props.state || ""} onChange={props.onChange} id="state" type="text" className="validate" />
                            <label htmlFor="state" className="active">State</label>
                        </div>
                        <div className="input-field col s4">
                            <input name="zip" value={props.zip || ""} onChange={props.onChange} id="zip" type="text" className="validate" />
                            <label htmlFor="zip" className="active">Zip Code</label>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
        <div className="card-action">
            <button className="waves-effect waves-teal btn-large" onClick={props.onClick}><i className="material-icons left">save</i>Save</button>
        </div>
    </div>;

export default UserUpdateForm;