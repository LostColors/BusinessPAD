const initialState = {
  products: [],
  loading: true,
  error: null,
  cartItems: [],
  logedIn: false,
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (product, item = {}, quantity) => {
  const { id = product.id, count = 0, title = product.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * product.price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const { products, cartItems } = state;

  const product = products.find(({ id }) => id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGED_IN":
      return {
        ...state,
        logedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        logedIn: false,
      };
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        products: [],
        loading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };

    case "PRODUCT_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "PRODUCT_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_PRODUCTS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  }
};
export default reducer;
