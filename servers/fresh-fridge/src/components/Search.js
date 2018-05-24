import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNullOrUndefined } from 'util';
import SearchInputForm from './SearchInputForm';
import NavLink from 'react-router-dom/NavLink';

class Search extends React.Component {
    constructor(props) {
        super(props);
        const tags = this.processUrl();
        console.log(tags);
        this.state = {
            tags,
            Energy: '',
            Carbs: '',
            Protein: '',
            Fats: '',
            Sodium: ''
        }
    }

    changeEnergy = (e) => {
        e.preventDefault();
        let Energy = e.target.value;
        this.setState({Energy});
    }

    changeCarbs = (e) => {
        e.preventDefault();
        let Carbs = e.target.value;
        this.setState({Carbs});
    }

    changeProtein = (e) => {
        e.preventDefault();
        let Protein = e.target.value;
        this.setState({Protein});
    }

    changeFats = (e) => {
        e.preventDefault();
        let Fats = e.target.value;
        this.setState({Fats});
    }

    changeSodium = (e) => {
        e.preventDefault();
        let Sodium = e.target.value;
        this.setState({Sodium});
    }

    processUrl = (e) => {
        let tags = [];
        if (!isNullOrUndefined(this.props.match.params.name)) {
            tags.push(this.props.match.params.name);
        } else if (!isNullOrUndefined(this.props.match.params.macros)) {
            tags = this.props.match.params.macros.split('l');
            tags = tags.map((tag) => parseInt(tag, 10));
        }
        return tags;
    }

    macroUrl = () => {
        let url = '';
        constants.mealPlanner.macroNutrients.forEach((nutrient) => {
            url += this.state[nutrient] + 'l';
        })
        url = url.slice(0, -1);
        return url;
    }

    render() {
        return (
            <div className="body_container">
            <SearchInputForm />
            <div class="panel-group">
              <div class="panel panel-default">
                <div class="panel-heading btn btn-default" style={{width:"100%",height:"25px",paddingTop:"2px",textAlign:"left"}} data-toggle="collapse" href="#collapse1">+ Advanced Search</div>
                <div id="collapse1" class="panel-collapse collapse">
                  <div class="panel-footer" style={{height:"135px"}}>
                    <div class="form-group">
                        <div style={{float:"left",width:"20%",paddingLeft:"20px",paddingRight:"20px"}}>
                            <label for="carbs" style={{fontWeight:"normal",fontSize:"small"}}>Energy (kCal)</label>
                            <input type="number" onChange={(e) => this.changeEnergy(e)} value={this.state.Energy} class="form-control" id="carbs" placeholder="Kilojoules" min="0"></input>
                        </div>
                        <div style={{float:"left",width:"20%",paddingLeft:"20px",paddingRight:"20px"}}>
                            <label for="carbs" style={{fontWeight:"normal",fontSize:"small"}}>Carbohydrates (g)</label>
                            <input type="number" onChange={(e) => this.changeCarbs(e)} value={this.state.Carbs} class="form-control" id="carbs" placeholder="Carbohydrates" min="0"></input>
                        </div>
                        <div style={{float:"left",width:"20%",paddingLeft:"20px",paddingRight:"20px"}}>
                            <label for="carbs" style={{fontWeight:"normal",fontSize:"small"}}>Protein (g)</label>
                            <input type="number" onChange={(e) => this.changeProtein(e)} value={this.state.Protein} class="form-control" id="carbs" placeholder="Protein" min="0"></input>
                        </div>
                        <div style={{float:"left",width:"20%",paddingLeft:"20px",paddingRight:"20px"}}>
                            <label for="carbs" style={{fontWeight:"normal",fontSize:"small"}}>Fats (g)</label>
                            <input type="number" onChange={(e) => this.changeFats(e)} value={this.state.Fats} class="form-control" id="carbs" placeholder="Fats" min="0"></input>
                        </div>
                        <div style={{float:"left",width:"20%",paddingLeft:"20px",paddingRight:"20px"}}>
                            <label for="carbs" style={{fontWeight:"normal",fontSize:"small"}}>Sodium (g)</label>
                            <input type="number" onChange={(e) => this.changeSodium(e)} value={this.state.Sodium} class="form-control" id="carbs" placeholder="Sodium" min="0"></input>
                        </div>
                        <NavLink to={'../../search/macros/' + this.macroUrl()} style={{float:"right",marginTop:"15px",marginRight:"20px"}}><button class="btn btn-default" type="submit">Advanced Search</button></NavLink>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                Search results for:
                {
                    (this.state.tags.length > 1) ?
                        this.state.tags.map((tag, index) => {
                            console.log(tag);
                            if (!isNaN(tag)) {
                                return <span class="label label-success">{constants.mealPlanner.macroNutrients[index] + ": < " + tag}{(tag == 0) ? " kCal" : " g"}</span>
                            }
                        }) :
                        this.state.tags.map((tag) => {
                            return <span class="label label-success">{tag}</span>
                        })
                }
            </div>
        </div>
        )
    }

}

export default Search;
