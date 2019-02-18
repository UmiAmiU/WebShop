import { connect } from "react-redux";
import ItemPage from "../../components/ItemPage";
import fetchGoods from "../middlewares/fetchGoods";

function getExactItem(goods, id) {
  const exactItems = goods.reduce((newArr, elem) => {
    const filtItems = elem.products.filter(item => item.code === id);

    return filtItems.length === 0 ? [...newArr] : [...newArr, ...filtItems];
  }, []);

  return exactItems;
}

const mapStateToProps = (state, ownProps) => ({
  goods: getExactItem(state.goods, ownProps.match.params.id),
  isLogged: state.user
});

const mapDispatchToProps = dispatch => ({
  getGoods: () => dispatch(fetchGoods())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);
