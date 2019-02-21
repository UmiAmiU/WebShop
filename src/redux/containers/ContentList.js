import { connect } from "react-redux";
import ContentList from "../../components/ContentList";
import fetchGoods from "../middlewares/fetchGoods";

const mapStateToProps = state => ({
  goods: state.goods
});

const mapDispatchToProps = dispatch => ({
  getGoods: () => dispatch(fetchGoods())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentList);
