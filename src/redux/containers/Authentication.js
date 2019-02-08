import { connect } from "react-redux";
import fetchUser from "../middlewares/fetchUser";
import { auth } from "../actions";
import Authentication from "../../components/Authentication";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  authUser: (id, name) => dispatch(auth(id, name)),
  getUser: (name, password) => dispatch(fetchUser(name, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
