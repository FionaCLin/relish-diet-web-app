import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNull } from 'util';
import api from '../api.js';

class MealList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealPlans: [],
            modalPlan: {
                id: 0,
                name: ''
            }
        }
    }

    componentWillMount() {
        const mealResult = (mealPlans) => {
            this.setState({mealPlans});
            console.log(mealPlans);
        }
        api.getMealList(this.props.user.id, mealResult);
    }

    changeModal = (e, plan) => {
        e.preventDefault();
        let { modalPlan } = this.state;
        modalPlan = {
            id: plan.id,
            name: plan.title
        }
        this.setState({modalPlan});
    }

    deletePlan = (e, planId) => {
        e.preventDefault();
        api.deleteMealPlan(planId);
        let mealPlans = this.state.mealPlans;
        mealPlans.splice(mealPlans.indexOf(mealPlans.find(x => x.id === planId)), 1);
        this.setState({mealPlans});
    }

    render() {
        return (
            <div class="body_container">
                {/* <!-- Modal --> */}
                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Remove Meal Plan</h4>
                    </div>
                    <div class="modal-body">
                        <p>Delete '{this.state.modalPlan.name}' from your meal plans?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" onClick={(e) => this.deletePlan(e, this.state.modalPlan.id)} class="btn btn-danger" data-dismiss="modal">Remove</button>
                    </div>
                    </div>

                </div>
                </div>
                <div id="myModal1" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Create Meal Plan</h4>
                    </div>
                    <div class="modal-body">
                        <p>Choose a goal option to work towards.</p>
                        <a href={this.props.user.id + "/mealplan/add/0"} role="button" class="btn btn-default" style={{width:"100%", textAlign: "left"}}>
                            Slimming - low carbs and low fats<span class="pull-right"><span class="glyphicon glyphicon-menu-right" style={{color:"green"}}></span></span>
                        </a>
                        <a href={this.props.user.id + "mealplan/add/1"} role="button" class="btn btn-default" style={{width:"100%", textAlign: "left"}}>
                            Muscle Building - high carbs and high protein<span class="pull-right"><span class="glyphicon glyphicon-menu-right" style={{color:"green"}}></span></span>
                        </a>
                        <a href={this.props.user.id + "mealplan/add/2"} role="button" class="btn btn-default" style={{width:"100%", textAlign: "left"}}>
                            Weight Loss - low carbs and high protein<span class="pull-right"><span class="glyphicon glyphicon-menu-right" style={{color:"green"}}></span></span>
                        </a>
                        <a href={this.props.user.id + "mealplan/add/3"} role="button" class="btn btn-default" style={{width:"100%", textAlign: "left"}}>
                            Stamina Training - high protein and low intake<span class="pull-right"><span class="glyphicon glyphicon-menu-right" style={{color:"green"}}></span></span>
                        </a>
                        <a href={this.props.user.id + "mealplan/add/4"} role="button" class="btn btn-default" style={{width:"100%", textAlign: "left"}}>
                            General Fitness - all rounder<span class="pull-right"><span class="glyphicon glyphicon-menu-right" style={{color:"green"}}></span></span>
                        </a>
                    </div>
                    <div class="modal-footer">
                    </div>
                    </div>

                </div>
                </div>
                <div style={{width:"100%",float:"left"}}>
                    <h3 style={{float:"left"}}>My Meal Plans</h3>
                    <button style={{float:"right"}} type="button" data-toggle="modal" data-target="#myModal1" class="btn btn-success">Create Meal Plan</button>
                </div>
                <br></br>
                <div style={{width:"100%",float:"left"}} class="list-group">
                    { this.state.mealPlans.map((plan) => {
                        return (
                        <a class="list-group-item list-group-item-action recipe_btn" style={{cursor:"pointer"}}>
                            <button type="button" onClick={(e) => this.changeModal(e, plan)} class="btn btn-danger btn-circle" style={{float:"right",marginTop:"5px"}} data-toggle="modal" data-target="#myModal"><i class="glyphicon glyphicon-remove"></i></button>
                            <Link to={this.props.user.id + "/mealplan/edit/" + plan.id}>
                                <button type="button" class="btn btn-success btn-circle" style={{float:"right",marginTop:"5px",marginRight:"10px"}}><i class="glyphicon glyphicon-edit"></i></button>
                            </Link>
                            <Link to={this.props.user.id + '/mealplan/view/' + plan.id}>
                            <div class="recipe_btn_content" >
                                <h4 style={{display:"inline"}}>{plan.title}</h4>
                                <span></span>
                                <div class="panel panel-default" style={{marginTop:"10px"}}>
                                <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
                                    <tbody><tr>
                                        {
                                        constants.mealPlanner.macroNutrients.map((nutrient) => {
                                            return <td className="macro_col">{nutrient} {(nutrient === 'Energy') ? "(kCal)" : "(g)"}</td>
                                        })
                                        }
                                    </tr>
                                        <tr>
                                        {
                                        constants.mealPlanner.smallMacros.map((nutrient) => {
                                                return <td className="macro_col">{plan[nutrient]}</td>
                                            })
                                        }
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </Link>
                        </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MealList;