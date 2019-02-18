import { connect } from "react-redux";
import GoodsDropDown from "../../components/GoodsDropDown";
import fetchGoods from "../middlewares/fetchGoods";

const getGoodsNames = goods => goods.map(el => el.id);

const mapStateToProps = state => ({
  goods: getGoodsNames(state.goods)
});

const mapDispatchToProps = dispatch => ({
  getGoods: () => dispatch(fetchGoods())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodsDropDown);
