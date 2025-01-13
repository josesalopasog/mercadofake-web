import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import NotFound from "../NotFound";
import CardItemSearch from "../../Components/CardItemSearch";

function SearchList() {
  const context = useContext(CartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
            context.filteredItems?.map((item) => (
                <CardItemSearch key={item.id} data={item} />
            ))
        );
      }else {
        return <NotFound />;
      }
    } else {
      return <NotFound />;
    }
  };

  return (
    <div className="flex flex-col mt-10 h-[100vh] w-[100%] items-center">
      <div className="flex flex-col ">{renderView()}</div>
      <ProductDetail />
    </div>
  );
}

export default SearchList;
