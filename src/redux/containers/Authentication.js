import { connect } from "react-redux";
import fetchUsersData from "../middlewares/fetchUsersData";
import Authentication from "../../components/Authentication";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsersData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
