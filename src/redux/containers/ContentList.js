import { connect } from "react-redux";
import ContentList from "../../components/ContentList";

const mapStateToProps = state => ({
  goods: state.goods
});

export default connect(mapStateToProps)(ContentList);
