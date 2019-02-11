import { connect } from "react-redux";
import { auth } from "../actions";
import App from "../../components/App";
import fetchUserSession from "../middlewares/fetchUserSession";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  authUser: (id, name) => dispatch(auth(id, name)),
  checkUser: (name, id) => dispatch(fetchUserSession(name, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
