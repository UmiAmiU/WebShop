import { connect } from "react-redux";
import CatalogItem from "../../components/CatalogItem";

const mapStateToProps = state => ({
  isUserLogged: state.user
});

export default connect(mapStateToProps)(CatalogItem);
