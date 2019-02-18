import { connect } from "react-redux";
import App from "../../components/App";
import fetchUserSession from "../middlewares/fetchUserSession";

const mapStateToProps = state => ({
  isLogged: state.user,
  user: state.auth
});

const mapDispatchToProps = dispatch => ({
  checkUser: (name, id) => dispatch(fetchUserSession(name, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
