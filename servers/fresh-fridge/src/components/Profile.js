import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNull } from 'util';
import api from '../api'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailOpen: false,
            usernameOpen: false,
            passwordOpen: false,
            goalOpen: false,
            bmiOpen: false,
            email: this.props.user.email,
            username: this.props.user.username,
            password: this.props.user.password,
            currentPassword: '',
            newPassword1: '',
            newPassword2: '',
            goals: this.props.user.goal.split(","),
            height: 145,
            weight: 56
        };
    }

    openEmail = (e) => {
        e.preventDefault();
        let { emailOpen } = this.state;
        emailOpen = !emailOpen;
        this.setState({ emailOpen });
        let { email } = this.state;
    }

    openUsername = (e) => {
        e.preventDefault();
        let { usernameOpen } = this.state;
        usernameOpen = !usernameOpen;
        this.setState({ usernameOpen });
    }

    openPassword = (e) => {
        e.preventDefault();
        let { passwordOpen } = this.state;
        passwordOpen = !passwordOpen;
        this.setState({ passwordOpen });
    }

    openGoal = (e) => {
        e.preventDefault();
        let { goalOpen } = this.state;
        goalOpen = !goalOpen;
        this.setState({ goalOpen });
    }

    openBMI = (e) => {
        e.preventDefault();
        let { bmiOpen } = this.state;
        bmiOpen = !bmiOpen;
        this.setState({ bmiOpen });
    }

    changeEmail = (e) => {
        e.preventDefault();
        let { email } = this.state;
        email = e.target.value;
        this.setState({ email });
    }

    saveEmail = (e) => {
        e.preventDefault();
        this.openEmail(e);
        api.updateUser(this.props.user.id, { email: this.state.email }, () => {
            let user = this.props.user;
            user.email = this.state.email;
            this.props.setUser(user);
        });

        console.log("ENter");
    }

    changeUsername = (e) => {
        e.preventDefault();
        let { username } = this.state;
        username = e.target.value;
        this.setState({ username });
    }


    changeCurrentPassword = (e) => {
        e.preventDefault();
        let { currentPassword } = this.state;
        currentPassword = e.target.value;
        this.setState({ currentPassword });
    }

    changeNewPassword1 = (e) => {
        e.preventDefault();
        let { newPassword1 } = this.state;
        newPassword1 = e.target.value;
        this.setState({ newPassword1 });
    }

    changeNewPassword2 = (e) => {
        e.preventDefault();
        let { newPassword2 } = this.state;
        newPassword2 = e.target.value;
        this.setState({ newPassword2 });
    }

    generatePassword = () => {
        let hiddenPassword = '';
        for (let i = 0; i < this.props.user.password.length ; i++) {
            hiddenPassword += '&#9679;';
        }
        return hiddenPassword;
    }

    saveUsername = (e) => {
        e.preventDefault();
        this.openUsername(e);
        api.updateUser(this.props.user.id, { username: this.state.username }, () => {
            console.log("i'm back");
            let user = this.props.user;
            user.username = this.state.username;
            this.props.setUser(user);
        });
        console.log("ENter");
    }

    savePassword = (e) => {
        e.preventDefault();
        this.openPassword(e);
        if(this.state.newPassword1 !== this.state.newPassword2) {
            console.log('new passwords don\'t mathch');
        } else {
            api.updatePassword(this.props.user.id, { password: this.state.newPassword1, oldpassword: this.state.currentPassword }, (res) => {
                let user = this.props.user;
                user.password = this.state.newPassword1;
                this.props.setUser(user);
                this.setState({ newPassword1: '', newPassword2: '', currentPassword: '' });
            });
        }
        console.log("ENter");
    }

    changeGoal = (e, goal) => {
        e.preventDefault();
        let { goals } = this.state;
        if (!goals.includes(goal)) {
            goals.push(goal);
        } else {
            goals.splice(goals.indexOf(goals.find(x => x == goal)), 1);
        }
        this.setState({ goals });
    }

    saveGoal = (e) => {
        e.preventDefault();
        this.openGoal(e);
        let goal = this.state.goals.join(',');
        console.log('>>>>',this.state.goals, goal);
        api.updateUser(this.props.user.id, { goal: goal }, () => {
            console.log("i'm back")
            let user = this.props.user;
            user.goal = goal;
            this.props.setUser(user);
        });

        console.log("ENter");
    }

    changeWeight = (e) => {
        e.preventDefault();
        let { weight } = this.state;
        weight = e.target.value;
        this.setState({ weight });
    }

    changeHeight = (e) => {
        e.preventDefault();
        let { height } = this.state;
        height = e.target.value;
        this.setState({ height });
    }
    changeUsername = (e) => {
        e.preventDefault();
        let { username } = this.state;
        username = e.target.value;
        this.setState({ username });
    }

    saveBMI = (e) => {
        e.preventDefault();
        this.openBMI(e);
        console.log("ENter");
    }

    goalsFromBMI = (BMI) => {
        let goals = [];
        if (BMI < 18.5) {
            goals.push(constants.mealPlanner.STAMINA_TRAINING, constants.mealPlanner.GENERAL_FITNESS);
        } else if (BMI < 25) {
            goals.push(constants.mealPlanner.GAIN_MUSCLE, constants.mealPlanner.STAMINA_TRAINING);
        } else {
            goals.push(constants.mealPlanner.SLIMMING, constants.mealPlanner.LOSE_WEIGHT);
        }
        return goals;
    }

    render() {
        let BMI = Math.round((this.state.weight / Math.pow(this.state.height / 100, 2)) * 10) / 10;
        return (
            <div className="recipe_container">
                <h4>Profile</h4>
                <br></br>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action profile_section">
                        <div className="form-group row">
                            <label for="emailInput" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                {/* <!--emailEdit--> */}
                                <div id="emailEdit" style={{ display: (this.state.emailOpen) ? "block" : "none" }}>
                                    <input type="title" className="form-control" id="emailInput" placeholder="example@gmail.com" onChange={(e) => this.changeEmail(e)} value={this.state.email}></input>
                                    <div style={{ float: "right", marginTop: "10px" }}>
                                        <button className="btn btn-secondary" onClick={(e) => this.openEmail(e)} style={{ marginRight: "10px" }}>Cancel</button>
                                        <button className="btn btn-success" onClick={(e) => this.saveEmail(e)}>Save</button>
                                    </div>
                                </div>
                                {/* <!--emailShow--> */}
                                <div id="emailShow" style={{ display: (!this.state.emailOpen) ? "block" : "none", marginBottom: "-10px" }}>
                                    <div style={{ float: "left" }}>{this.props.user.email}</div>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ float: "right" }} onClick={(e) => this.openEmail(e)}>
                                        <span className="glyphicon glyphicon-edit"></span>
                                    </button>
                                </div>
                                {/* <!----> */}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item list-group-item-action profile_section">
                        <div className="form-group row">
                            <label for="emailInput" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                {/* <!--usernameEdit--> */}
                                <div id="usernameEdit" style={{ display: (this.state.usernameOpen) ? "block" : "none" }}>
                                    <input type="title" className="form-control" id="usernameInput" placeholder="Username" onChange={(e) => this.changeUsername(e)} value={this.state.username}></input>
                                    <div style={{ float: "right", marginTop: "10px" }}>
                                        <button className="btn btn-secondary" onClick={(e) => this.openUsername(e)} style={{ marginRight: "10px" }}>Cancel</button>
                                        <button className="btn btn-success" onClick={(e) => this.saveUsername(e)}>Save</button>
                                    </div>
                                </div>
                                {/* <!--usernameShow--> */}
                                <div id="usernameShow" style={{ display: (!this.state.usernameOpen) ? "block" : "none", marginBottom: "-10px" }}>
                                    <div style={{ float: "left" }}>{this.props.user.username}</div>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ float: "right" }} onClick={(e) => this.openUsername(e)}>
                                        <span className="glyphicon glyphicon-edit"></span>
                                    </button>
                                </div>
                                {/* <!----> */}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item list-group-item-action profile_section">
                        <div className="form-group row">
                            <label for="emailInput" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                {/* <!--passwordEdit--> */}
                                <div id="passwordEdit" style={{ display: (this.state.passwordOpen) ? "block" : "none" }}>
                                    <input type="password" className="form-control" id="usernameInput"
                                        onChange={(e) => this.changeCurrentPassword(e)} value={this.state.currentPassword} placeholder="Current password" style={{ margin: "10px 0" }}></input>
                                    <input type="password" className="form-control" id="usernameInput"
                                        onChange={(e) => this.changeNewPassword1(e)} value={this.state.NewPassword1} placeholder="New password" style={{ margin: "10px 0" }}></input>
                                    <input type="password" className="form-control"
                                        onChange={(e) => this.changeNewPassword2(e)} value={this.state.NewPassword2}
                                        id="usernameInput" placeholder="Re-type new password" style={{ margin: "10px 0" }}></input>
                                    <div style={{ float: "right", marginTop: "10px" }}>
                                        <button className="btn btn-secondary" onClick={(e) => this.openPassword(e)} style={{ marginRight: "10px" }}>Cancel</button>
                                        <button className="btn btn-success" onClick={(e) => this.savePassword(e)}>Save</button>
                                    </div>
                                </div>
                                {/* <!--passwordShow--> */}
                                <div id="passwordShow" style={{ display: (!this.state.passwordOpen) ? "block" : "none", marginBottom: "-10px" }}>
                                    <div style={{ float: "left" }}>{this.generatePassword()}</div>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ float: "right" }} onClick={(e) => this.openPassword(e)}>
                                        <span className="glyphicon glyphicon-edit"></span>
                                    </button>
                                </div>
                                {/* <!----> */}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item list-group-item-action profile_section">
                        <div className="form-group row">
                            <label for="emailInput" className="col-sm-2 col-form-label">BMI</label>
                            <div className="col-sm-10">
                                {/* <!--bmiEdit--> */}
                                <div id="passwordEdit" style={{ display: (this.state.bmiOpen) ? "block" : "none" }}>
                                    <input type="title" className="form-control" id="usernameInput" placeholder="Weight" style={{ margin: "10px", width: "500px", float: "left" }}
                                        value={this.state.weight} onChange={(e) => { this.changeWeight(e) }}></input><div style={{ float: "left", marginTop: "15px" }}>kg</div>
                                    <input type="title" className="form-control" id="usernameInput" placeholder="Height" style={{ margin: "10px", width: "500px", float: "left" }}
                                        value={this.state.height} onChange={(e) => { this.changeHeight(e) }}></input><div style={{ float: "left", marginTop: "15px" }}>cm</div>
                                    <div style={{ float: "right", marginTop: "10px" }}>
                                        <button className="btn btn-secondary" onClick={(e) => this.openBMI(e)} style={{ marginRight: "10px" }}>Cancel</button>
                                        <button className="btn btn-success" onClick={(e) => this.saveBMI(e)}>Re-calculate</button>
                                    </div>
                                </div>
                                {/* <!--bmiShow--> */}
                                <div id="passwordShow" style={{ display: (!this.state.bmiOpen) ? "block" : "none", marginBottom: "-10px" }}>
                                    <div>{BMI}</div>
                                    <div style={{ marginTop: "10px" }}>
                                        <div style={{ float: "left" }}>Suggested goals: </div>
                                        <div style={{ float: "left" }}>
                                            {
                                                this.goalsFromBMI(BMI).map((goal) => {
                                                    return <span className="label label-success" style={{ marginLeft: "5px" }}>{goal}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ float: "right" }} onClick={(e) => this.openBMI(e)}>
                                        <span className="glyphicon glyphicon-edit"></span>
                                    </button>
                                </div>
                                {/* <!----> */}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item list-group-item-action profile_section">
                        <div className="form-group row">
                            <label for="emailInput" className="col-sm-2 col-form-label">Personal Goals</label>
                            <div className="col-sm-10">
                                {/* <!--goalEdit--> */}
                                <div id="goalEdit" style={{ display: (this.state.goalOpen) ? "block" : "none" }}>
                                    {
                                        constants.mealPlanner.goalOptions.map((goal) => {
                                            return <label className="checkbox-inline"><input type="checkbox" value={goal} onChange={(e) => this.changeGoal(e, goal)} checked={!!this.state.goals.includes(goal)}></input>{goal}</label>
                                        })
                                    }
                                    <div style={{ float: "right", marginTop: "10px" }}>
                                        <button className="btn btn-secondary" onClick={(e) => this.openGoal(e)} style={{ marginRight: "10px" }}>Cancel</button>
                                        <button className="btn btn-success" onClick={(e) => this.saveGoal(e)}>Save</button>
                                    </div>
                                </div>
                                {/* <!--goalShow--> */}
                                <div id="goalShow" style={{ display: (!this.state.goalOpen) ? "block" : "none", marginBottom: "-10px" }}>
                                    <div style={{ float: "left" }}>
                                        {
                                            this.props.user.goal.split(",").map((goal) => {
                                                return <span className="label label-success" style={{ marginLeft: "5px" }}>{goal}</span>
                                            })
                                        }
                                    </div>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ float: "right" }} onClick={(e) => this.openGoal(e)}>
                                        <span className="glyphicon glyphicon-edit"></span>
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
