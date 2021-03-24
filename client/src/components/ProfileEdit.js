import React from "react";
import constants from "../constants";
import { connect } from "react-redux";

const ProfileEdit = props => {
  // ProfileEdit use user profile.state for profile editing\
  if (!props.id && !props.email) {
    props[0].history.push("/login");
  }
  let user = { ...props };
  const goalOptions = [
    "Slimming",
    "Building Muscle",
    "Weight loss",
    "Stamina Training",
    "General Fitness"
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1">
          <h4>Profile</h4>
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              {/* <!--emailEdit--> */}
              <div id="emailEdit" style={{ display: "block" }}>
                <input
                  type="title"
                  className="form-control"
                  name="email"
                  id="emailInput"
                  placeholder="example@gmail.com"
                  onClick={user.handleChange}
                  value={user.email}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              {/* <!--usernameEdit--> */}
              <div id="usernameEdit" style={{ display: "block" }}>
                <input
                  type="title"
                  className="form-control"
                  id="usernameInput"
                  name="username"
                  placeholder="Username"
                  onChange={user.handleChange}
                  value={user.username}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              {/* <!--givennameEdit--> */}
              <div id="givennameEdit" style={{ display: "block" }}>
                <input
                  type="title"
                  className="form-control"
                  name="givenname"
                  id="givennameInput"
                  onChange={user.handleChange}
                  value={user.givenname}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="familyInput" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              {/* <!--familynameEdit--> */}
              <div id="familynameEdit" style={{ display: "block" }}>
                <input
                  type="title"
                  name="familyname"
                  className="form-control"
                  id="familynameInput"
                  onChange={user.handleChange}
                  value={user.familyname}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              DOB
            </label>
            <div className="col-sm-10">
              {/* <!--birthdayEdit--> */}
              <div id="birthdayEdit" style={{ display: "block" }}>
                <input
                  type="date"
                  className="form-control"
                  id="birthdayInput"
                  name="birthday"
                  onChange={user.handleChange}
                  value={user.birthday}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label
              htmlFor="CaloriesGoalInput"
              className="col-sm-2 col-form-label"
            >
              Calories Goal
            </label>
            <div className="col-sm-10">
              {/* <!--familynameEdit--> */}
              <div id="CaloriesGoalEdit" style={{ display: "block" }}>
                <input
                  type="number"
                  name="calories_goal"
                  className="form-control"
                  id="caloriesgoalInput"
                  onChange={user.handleChange}
                  value={user.calories_goal}
                  min="0"
                  max="999"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="HeightInput" className="col-sm-2 col-form-label">
              Height
            </label>
            <div className="col-sm-10">
              {/* <!--familynameEdit--> */}
              <div id="HeightEdit" style={{ display: "block" }}>
                <input
                  type="number"
                  name="height"
                  className="form-control"
                  id="heightInput"
                  onChange={user.handleChange}
                  value={user.height}
                  min="0"
                  max="999"
                ></input>
                cm
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="WeightInput" className="col-sm-2 col-form-label">
              Weight
            </label>
            <div className="col-sm-10">
              {/* <!--familynameEdit--> */}
              <div id="WeightEdit" style={{ display: "block" }}>
                <input
                  type="number"
                  name="weight"
                  className="form-control"
                  id="weighttInput"
                  onChange={user.handleChange}
                  value={user.weight}
                  min="0"
                  max="999"
                />
                kg
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <div className="col-sm-2 col-form-label">
              <label htmlFor="emailInput">Password</label>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ margin: "8px 0" }}
                onClick={e => user.openPassword(user.passwordOpen)}
              >
                <span className="glyphicon glyphicon-edit"></span>
              </button>
            </div>

            <div className="col-sm-10">
              {/* <!--passwordEdit--> */}

              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Current password"
                style={{ margin: "10px 0" }}
                name="password"
              ></input>

              <div
                id="passwordEdit"
                style={{
                  display: user.passwordOpen ? "block" : "none"
                }}
              >
                <input
                  type="password"
                  className="form-control"
                  id="editPasswordInput"
                  placeholder="New password"
                  name="newpassword"
                  style={{ margin: "10px 0" }}
                ></input>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPasswordInput"
                  name="dnewpassword"
                  placeholder="Re-type new password"
                  style={{ margin: "10px 0" }}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="genderInput" className="col-sm-2 col-form-label">
              Geneder
            </label>
            {/* <!--goalEdit--> */}
            <div
              id="genderEdit"
              className="col-sm-10"
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start"
              }}
            >
              {["F", "M"].map((gender, index) => {
                return (
                  <span
                    className="checkbox-inline"
                    name="gender"
                    style={{ marginRight: "48px" }}
                    onChange={user.handleChange}
                    key={index}
                  >
                    {gender}
                    <input
                      key={index}
                      style={{ margin: "4px" }}
                      type="checkbox"
                      value={`${gender}`}
                      name="gender"
                      checked={user.gender && user.gender === gender}
                      onChange={user.handleChange}
                    ></input>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="goalInput" className="col-sm-2 col-form-label">
              Personal Goal
            </label>
            {/* <!--goalEdit--> */}
            <div
              id="goalEdit"
              className="col-sm-10"
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start"
              }}
            >
              {goalOptions &&
                goalOptions.map((goal, index) => {
                  return (
                    <span
                      className="checkbox-inline"
                      style={{ marginRight: "48px" }}
                      name="goal"
                      onChange={user.handleChange}
                      key={index}
                    >
                      {goal}
                      <input
                        key={index}
                        style={{ margin: "4px" }}
                        type="checkbox"
                        value={`${goal}`}
                        name="goal"
                        checked={user.goal && user.goal === goal}
                        onChange={user.handleChange}
                      ></input>
                    </span>
                  );
                })}
            </div>
          </div>
          <div style={{ float: "right", marginTop: "10px" }}>
            <button
              className="btn btn-secondary"
              onClick={e => props[0].history.push("/profile")}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </button>
            <button
              className="btn btn-success"
              onClick={() => user.updateProfile(user)}
            >
              Save
            </button>
          </div>
        </div>
        {/* <!--list group--> */}
      </div>
      {/* <!--container end--> */}
    </div>
  );
};

const mapStateToProps = state => {
  if (state.profile.user) {
    let localState = {
      passwordOpen: state.passwordOpen,
      ...state.profile.user,
      newpassword: null,
      dnewpassword: null,
      oldUserState: state.user.user
    };
    if (localState.birthday) {
      localState.birthday = localState.birthday.split("T")[0];
    }
    return localState;
  } else {
    return null;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      dispatch({
        type: constants.user.PROFILE_HANDLE_CHANGE,
        key: [event.target.name],
        value: event.target.value
      });
    },
    openPassword: passwordOpen => {
      dispatch({
        type: constants.user.PROFILE_HANDLE_CHANGE,
        key: "passwordOpen",
        value: passwordOpen ? false : true
      });
    },
    updateProfile: user => {
      let updated = {};
      let update = {};
      for (let k of Object.keys(user.oldUserState)) {
        if (user[k] !== user.oldUserState[k]) {
          updated[k] = user[k];
        } else if (user[k]) {
          update[k] = user[k];
        }
      }
      let resp = dispatch({
        type: constants.user.PROFILE_SAVE_CHANGE,
        user_id: user.id,
        tokenKey: user.tokenkey,
        payload: updated
      });
      resp.res
        .then(res => {
          user[0].history.push("/profile");
          dispatch({
            type: constants.user.USER_DEFAULT,
            payload: { update: { ...update, ...updated }, error: "" }
          });
          return;
        })
        .catch(err => {
          dispatch({
            type: constants.user.PROFILE_DEFAULT,
            payload: { error: `* ${err.response.data}` }
          });
        });
      // props[0].history.push("/profile");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
