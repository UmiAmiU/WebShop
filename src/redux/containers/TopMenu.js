import { connect } from "react-redux";
import TopMenu from "../../components/TopMenu";

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(TopMenu);
