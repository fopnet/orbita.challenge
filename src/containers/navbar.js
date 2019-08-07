import { connect } from "react-redux";
import NavBar from "../components/navbar/navbar";
import { logoutAction } from "../actions/authAction";

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(
  mapStateToProps,
  { logoutAction },
)(NavBar);
