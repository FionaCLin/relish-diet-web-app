import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNull } from 'util';

class MealList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealPlans: this.props.mealPlans,
            modalPlan: {
                id: 0,
                name: ''
            }
        }
    }

    changeModal = (e, plan) => {
        e.preventDefault();
        let { modalPlan } = this.state;
        modalPlan = {
            id: plan.id,
            name: plan.name
        }
        this.setState({modalPlan});
    }

    deletePlan = (e, planId) => {
        e.preventDefault();
        let mealPlans = this.props.mealPlans;
        mealPlans.splice(mealPlans.indexOf(mealPlans.find(x => x.id === planId)), 1);
        this.props.deletePlan(mealPlans);
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
                <div style={{width:"100%",float:"left"}}>
                    <h3 style={{float:"left"}}>My Meal Plans</h3>
                    <Link to="mealplan/add"><button style={{float:"right"}} type="button" class="btn btn-success">Create Meal Plan</button></Link>
                </div>
                <br></br>
                <div style={{width:"100%",float:"left"}} class="list-group">
                    { this.state.mealPlans.map((plan) => {
                        return (
                        <a class="list-group-item list-group-item-action recipe_btn" style={{cursor:"pointer"}}>
                            <button type="button" onClick={(e) => this.changeModal(e, plan)} class="btn btn-danger btn-circle" style={{float:"right",marginTop:"5px"}} data-toggle="modal" data-target="#myModal"><i class="glyphicon glyphicon-remove"></i></button>
                            <Link to={"mealplan/edit/" + plan.id}>
                                <button type="button" class="btn btn-success btn-circle" style={{float:"right",marginTop:"5px",marginRight:"10px"}}><i class="glyphicon glyphicon-edit"></i></button>
                            </Link>
                            <Link to={"mealplan/view/" + plan.id}>
                                <table class="table table-bordered" style={{marginLeft:"5px",width:"150px",height:"150px",float:"left"}}>
                                    <tr>
                                        <td style={bg_img(plan.img[0])} class="tile_img"></td>
                                        <td style={bg_img(plan.img[1])} class="tile_img"></td>
                                    </tr>
                                    <tr>
                                        <td style={bg_img(plan.img[2])} class="tile_img"></td>
                                        <td style={bg_img(plan.img[3])} class="tile_img"></td>
                                    </tr>
                                </table>
                            </Link>
                            <div class="recipe_btn_content" style={{marginTop:"-15px"}}>
                                <h4 onclick="location.href='view_planner.html';" style={{display:"inline"}}>{plan.name}</h4>
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
                                        constants.mealPlanner.macroNutrients.map((nutrient) => {
                                                return <td className="macro_col">{plan.macros[nutrient]}</td>
                                            })
                                        }
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MealList;