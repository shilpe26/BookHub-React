const ACTIONS = {
    ADDTOWISHLIST : "add-to-wishlist", 
    REMOVEFROMWISHLIST : "remove-from-wishlist"
  }
export const reducer = (wishlist_state, action) => {
    switch(action.type){
        case ACTIONS.ADDTOWISHLIST:
            if(wishlist_state.items.filter(item => item._id === action.payload._id).length !== 0){ 
             return {...wishlist_state, msg: "Product is already in your wishlist!"}
            }else{
             return {...wishlist_state,msg: "Product added",
            quantity: wishlist_state.quantity + 1, 
            items: [...wishlist_state.items, action.payload]}
            }
        case ACTIONS.REMOVEFROMWISHLIST:
            return {...wishlist_state, quantity: wishlist_state.quantity - 1, 
                items: wishlist_state.items.filter(item => item._id !== action.payload)}
        default: return wishlist_state
        }
}