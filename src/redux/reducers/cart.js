
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cart = (state = initialState, action) =>{
    switch (action.type){
        case "ADD_COOKIE_CART": {
            const currentCookieItem =
                !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItem = {
                ...state.items,
                [action.payload.id]: {
                    items: currentCookieItem,
                    categoryPrice: getTotalPrice(currentCookieItem)
                }
            }
            const items = Object.values(newItem).map(obj => obj.items);
            const allCookies = [].concat.apply([], items);
            const totalCookies = getTotalPrice(allCookies);
            return {
                ...state,
                items: newItem,
                totalCount: allCookies.length,
                totalPrice: totalCookies
            };
        }

        case 'CLEAR_CART': {
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {},
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].categoryPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }

        default:
            return state
    }
}

export default cart;