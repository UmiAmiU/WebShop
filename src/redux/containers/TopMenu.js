import { connect } from "react-redux";
import TopMenu from "../../components/TopMenu";
import addItem from "../middlewares/addItem";
import goods from "../../goods";

const mapStateToProps = state => ({
  isLogged: state.user,
  user: state.auth
});

const mapDispatchToProps = dispatch => ({
  addItem: () => dispatch(addItem("Appliances", goods[1]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
