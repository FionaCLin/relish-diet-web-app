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
            bmiOpen: false,
            email: user.email,
            username: user.username,
            password: user.password,
            goals: user.goals,
            height: user.height,
            weight: user.weight
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

    openBMI = (e) => {
        e.preventDefault();
        let { bmiOpen } = this.state;
        bmiOpen = !bmiOpen;
        this.setState({bmiOpen});
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

    changeGoal = (e, index) => {
        e.preventDefault();
        let { goals } = this.state;
        if (!goals.includes(index)) {
            goals.push(index);
        } else {
            goals.splice(index, 1);
        }
        this.setState({goals});
    }

    saveGoal = (e) => {
        e.preventDefault();
        let users = this.props.users;
        const userIndex = users.indexOf(users.find(x => x.id == this.props.curr_user));
        users[userIndex].goals = this.state.goals;
        this.props.changeUsers(users);
        this.openGoal(e);
        console.log("ENter");
    }

    changeWeight = (e) => {
        e.preventDefault();
        let { weight } = this.state;
        weight = e.target.value;
        this.setState({weight});
    }

    changeHeight = (e) => {
        e.preventDefault();
        let { height } = this.state;
        height = e.target.value;
        this.setState({height});
    }

    saveBMI = (e) => {
        e.preventDefault();
        let users = this.props.users;
        const userIndex = users.indexOf(users.find(x => x.id == this.props.curr_user));
        users[userIndex].height = this.state.height;
        users[userIndex].weight = this.state.weight;
        this.props.changeUsers(users);
        this.openBMI(e);
        console.log("ENter");
    }

    goalsFromBMI = (BMI) => {
        let goals = [];
        if (BMI < 18.5) {
            goals.push(3, 4);
        } else if (BMI < 25) {
            goals.push(1, 3);
        } else {
            goals.push(0, 2);
        }
        return goals;
    }

    render() {
        let user = this.props.users.find(x => x.id == this.props.curr_user);
        const goalOptions = ['Slimming', 'Building Muscle', 'Weight loss', 'Stamina Training', 'General Fitness'];
        let BMI = Math.round((user.weight/Math.pow(user.height/100,2))*10)/10;
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
                        <label for="emailInput" class="col-sm-2 col-form-label">BMI</label>
                        <div class="col-sm-10">
                            {/* <!--bmiEdit--> */}
                            <div id="passwordEdit" style={{display: (this.state.bmiOpen) ? "block" : "none"}}>
                                <input type="title" class="form-control" id="usernameInput" placeholder="Weight" style={{margin:"10px", width:"500px", float: "left"}}
                                    value={this.state.weight} onChange={(e) => {this.changeWeight(e)}}></input><div style={{float:"left", marginTop:"15px"}}>kg</div>
                                <input type="title" class="form-control" id="usernameInput" placeholder="Height" style={{margin:"10px", width:"500px", float: "left"}}
                                    value={this.state.height} onChange={(e) => {this.changeHeight(e)}}></input><div style={{float:"left", marginTop:"15px"}}>cm</div>
                                <div style={{float:"right", marginTop:"10px"}}>
                                    <button class="btn btn-secondary" onClick={(e) => this.openBMI(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick={(e) => this.saveBMI(e)}>Re-calculate</button>
                                </div>
                            </div>
                            {/* <!--bmiShow--> */}
                            <div id="passwordShow" style={{display: (!this.state.bmiOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div>{BMI}</div>
                                <div style={{marginTop:"10px"}}>
                                    <div style={{float:"left"}}>Suggested goals: </div>
                                    <div style={{float:"left"}}>
                                        {
                                            this.goalsFromBMI(BMI).map((goalIndex) => {
                                                return <span class="label label-success" style={{marginLeft:"5px"}}>{goalOptions[goalIndex]}</span>
                                            })
                                        }
                                    </div>
                                </div>
                                <button type="button" class="btn btn-secondary btn-sm" style={{float:"right"}} onClick={(e) => this.openBMI(e)}>
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
                                        return <label class="checkbox-inline"><input type="checkbox" value={'"' + index + '"'} onChange={(e) => this.changeGoal(e, index)} checked={!!this.state.goals.includes(index)}></input>{goal}</label>
                                    })
                                }
                                <div style={{float:"right",marginTop:"10px"}}>
                                    <button class="btn btn-secondary" onClick={(e) => this.openGoal(e)} style={{marginRight:"10px"}}>Cancel</button>
                                    <button class="btn btn-success" onClick={(e) => this.saveGoal(e)}>Save</button>
                                </div>
                            </div>
                            {/* <!--goalShow--> */}
                            <div id="goalShow" style={{display: (!this.state.goalOpen) ? "block" : "none", marginBottom:"-10px"}}>
                                <div style={{float:"left"}}>
                                    {
                                        user.goals.map((goalIndex) => {
                                            return <span class="label label-success" style={{marginLeft:"5px"}}>{goalOptions[goalIndex]}</span>
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