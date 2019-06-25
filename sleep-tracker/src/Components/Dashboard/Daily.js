import React, { Component } from "react";
import { connect } from "react-redux";
import { getDaily } from "../../store/actions";

import DailyChart from "./Charts/DailyChart";

class Daily extends Component {
  componentDidMount() {
    console.log(this.props.userData);
    if (this.props.userData) {
      this.props.getDaily(this.props.userData.id);
    }
  }

  render() {
    console.log(this.props.userData);
    return (
      <div>
        <DailyChart />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registering: state.registering,
    error: state.error,
    dailyData: state.dailyData,
    userData: state.userData
  };
};

export default connect(
  mapStateToProps,
  { getDaily }
)(Daily);
