import React from "react";
import { connect } from "react-redux";

const Profile = props => {
  // Profile use user user.state for profile display
  if (!props.id && props.email) {
    props[0].history.push("/login");
  }
  let user = { ...props };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1">
          <h4>Profile</h4>
        </div>
        <div className="col-sm-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ margin: "8px 0" }}
            onClick={e => props[0].history.push("/profile/edit")}
          >
            <span className="glyphicon glyphicon-edit"></span>
          </button>
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="emailShow"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.email}</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              {/* <!--usernameShow--> */}
              <div
                id="usernameShow"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.username}</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="First Name Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.givenname}</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="First Name Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.familyname}</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              DOB
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="First Name Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>
                  {/* {user.birthday && user.birthday.split("T")[0]} */}
                  {user.birthday &&
                    user.birthday.substr(0, user.birthday.indexOf("T"))}
                </div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Calories Goal
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="Calories Goal Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.calories_goal} calories</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="heightInput" className="col-sm-2 col-form-label">
              Height
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="Height Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.height} cm</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="weightInput" className="col-sm-2 col-form-label">
              Weight
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="Weight Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.weight} kg</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              {/* <!--emailShow--> */}
              <div
                id="First Name Show"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>{user.gender}</div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              {/* <!--passwordShow--> */}
              <div
                id="passwordShow"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>
                  &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;
                </div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action profile_section">
          <div className="form-group row">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Personal Goals
            </label>
            <div className="col-sm-10">
              {/* <!--goalShow--> */}
              <div
                id="goalShow"
                style={{
                  marginBottom: "-10px"
                }}
              >
                <div style={{ float: "left" }}>
                  {user.goal && (
                    <span className="label label-success">{user.goal}</span>
                  )}
                </div>
              </div>
              {/* <!----> */}
            </div>
          </div>
        </div>
        {/* <!--list group--> */}
      </div>
      {/* <!--container end--> */}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state.user.user };
};

export default connect(mapStateToProps)(Profile);
