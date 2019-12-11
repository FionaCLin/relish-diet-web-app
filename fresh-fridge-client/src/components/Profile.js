import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNull } from 'util';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        let user = this.props.users.find(x => x.id == this.props.curr_user);
        this.state = {
            emailOpen: false,
            usernameOpen: false,
            passwordOpen: false,
            goalOpen: false,
            email: user.email,
            username: user.username,
            password: user.password,
            goals: user.goals
        };
    }

    openEmail = (e) => {
        e.preventDefault();
        let { emailOpen } = this.state;
        emailOpen = !emailOpen;
        this.setState({emailOpen});
        let { email } = this.state;
    }

    openUsername = (e) => {
        e.preventDefault();
        let { usernameOpen } = this.state;
        usernameOpen = !usernameOpen;
        this.setState({usernameOpen});
    }

    openPassword = (e) => {
        e.preventDefault();
        let { passwordOpen } = this.state;
        passwordOpen = !passwordOpen;
        this.setState({passwordOpen});
    }

    openGoal = (e) => {
        e.preventDefault();
        let { goalOpen } = this.state;
        goalOpen = !goalOpen;
        this.setState({goalOpen});
    }

    changeEmail = (e) => {
        e.preventDefault();
        let { email } = this.state;
        email = e.target.value;
        this.setState({email});
    }

    saveEmail = (e) => {
        e.preventDefault();
        let users = this.props.users;
        const userIndex = users.indexOf(users.find(x => x.id == this.props.curr_user));
        users[userIndex].email = this.state.email;
        this.props.changeUsers(users);
        this.openEmail(e);
        console.log("ENter");
    }

    changeUsername = (e) => {
        e.preventDefault();
        let { username } = this.state;
        username = e.target.value;
        this.setState({username});
    }

    saveUsername = (e) => {
        e.preventDefault();
        let users = this.props.users;
        const userIndex = users.indexOf(users.find(x => x.id == this.props.curr_user));
        users[userIndex].username = this.state.username;
        this.props.changeUsers(users);
        this.openUsername(e);
        console.log("ENter");
    }

    render() {
        let user = this.props.users.find(x => x.id == this.props.curr_user);
        const goalOptions = ['Slimming', 'Building Muscle', 'Weight loss', 'Stamina Training', 'General Fitness'];
        return (
            <div class="recipe_container">
            <h4>Profile</h4>
            <br></br>
            <div class="list-group">
                <div class="list-group-item list-group-item-action profile_section">
                    <div class="form-group row">
                        <label for="emailInput" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            {/* <!--emailEdit--> */}
                            <div id="emailEdit" style={{display: (this.state.emailOpen) ? "block" : "none"}}>
                                <input type="title" class="form-control" id="emailInput" placeholder="example@gmail.com" onChange={(e) => this.changeEmail(e)} value={this.state.email}></input>
                                <div style={{float:"right",marginTop:"10px"}}>
                                    <button class="btn btn-secondary" onClick={(e) => this.openEmail(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick={(e) => this.saveEmail(e)}>Save</button>
                                </div>
                            </div>
                            {/* <!--emailShow--> */}
                            <div id="emailShow" style={{display: (!this.state.emailOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div style={{float:"left"}}>{user.email}</div>
                                <button type="button" class="btn btn-secondary btn-sm" style={{float:"right"}} onClick={(e) => this.openEmail(e)}>
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                            </div>
                            {/* <!----> */}
                        </div>
                    </div>
                </div>
                <div class="list-group-item list-group-item-action profile_section">
                    <div class="form-group row">
                        <label for="emailInput" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            {/* <!--usernameEdit--> */}
                            <div id="usernameEdit" style={{display: (this.state.usernameOpen) ? "block" : "none"}}>
                                <input type="title" class="form-control" id="usernameInput" placeholder="Username" onChange={(e) => this.changeUsername(e)} value={this.state.username}></input>
                                <div style={{float:"right",marginTop:"10px"}}>
                                <button class="btn btn-secondary" onClick={(e) => this.openUsername(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick={(e) => this.saveUsername(e)}>Save</button>
                                </div>
                            </div>
                            {/* <!--usernameShow--> */}
                            <div id="usernameShow" style={{display: (!this.state.usernameOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div style={{float:"left"}}>{user.username}</div>
                                <button type="button" class="btn btn-secondary btn-sm" style={{float:"right"}} onClick={(e) => this.openUsername(e)}>
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                            </div>
                            {/* <!----> */}
                        </div>
                    </div>
                </div>
                <div class="list-group-item list-group-item-action profile_section">
                    <div class="form-group row">
                        <label for="emailInput" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            {/* <!--passwordEdit--> */}
                            <div id="passwordEdit" style={{display: (this.state.passwordOpen) ? "block" : "none"}}>
                                <input type="password" class="form-control" id="usernameInput" placeholder="Current password" style={{margin:"10px 0"}}></input>
                                <input type="password" class="form-control" id="usernameInput" placeholder="New password" style={{margin:"10px 0"}}></input>
                                <input type="password" class="form-control" id="usernameInput" placeholder="Re-type new password" style={{margin:"10px 0"}}></input>
                                <div style={{float:"right", marginTop:"10px"}}>
                                    <button class="btn btn-secondary" onClick={(e) => this.openPassword(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick="">Save</button>
                                </div>
                            </div>
                            {/* <!--passwordShow--> */}
                            <div id="passwordShow" style={{display: (!this.state.passwordOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div style={{float:"left"}}>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</div>
                                <button type="button" class="btn btn-secondary btn-sm" style={{float:"right"}} onClick={(e) => this.openPassword(e)}>
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                            </div>
                            {/* <!----> */}
                        </div>
                    </div>
                </div>
                <div class="list-group-item list-group-item-action profile_section">
                    <div class="form-group row">
                        <label for="emailInput" class="col-sm-2 col-form-label">Personal Goals</label>
                        <div class="col-sm-10">
                            {/* <!--goalEdit--> */}
                            <div id="goalEdit" style={{display: (this.state.goalOpen) ? "block" : "none"}}>
                                {
                                    goalOptions.map((goal, index) => {
                                        if (user.goals.includes(index)) {
                                            return <label class="checkbox-inline"><input type="checkbox" value={'"' + index + '"'} checked></input>{goal}</label>
                                        } else {
                                            return <label class="checkbox-inline"><input type="checkbox" value={'"' + index + '"'}></input>{goal}</label>
                                        }
                                    })
                                }
                                <div style={{float:"right",marginTop:"10px"}}>
                                    <button class="btn btn-secondary" onClick={(e) => this.openGoal(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick="">Save</button>
                                </div>
                            </div>
                            {/* <!--goalShow--> */}
                            <div id="goalShow" style={{display: (!this.state.goalOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div style={{float:"left"}}>
                                    {
                                        user.goals.map((goalIndex) => {
                                            return <span class="label label-success">{goalOptions[goalIndex]}</span>
                                        })
                                    }
                                </div>
                                <button type="button" class="btn btn-secondary btn-sm" style={{float:"right"}} onClick={(e) => this.openGoal(e)}>
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                            </div>
                            {/* <!----> */}
                        </div>
                    </div>
                </div>
            {/* <!--list group--> */}
            </div>
        {/* <!--container end--> */}
        </div>
        )
    }
}

export default Profile;