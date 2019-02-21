import { connect } from "react-redux";
import ItemPage from "../../components/ItemPage";

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

export default connect(mapStateToProps)(ItemPage);
