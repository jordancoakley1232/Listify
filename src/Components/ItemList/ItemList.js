import "./ItemList.scss"

const ItemList = ({ shoppingItems, addItem }) => {
    // map over shopping items store 
    return (
        <>
            {shoppingItems.map((category, i) => {
                return <div className="itemlist" key={category.id}>
                    <h2 className="itemlist-category">{category.categoryName}</h2>
                    <div className="itemlist-list">
                        {category.items.map(item => {
                            return <div key={item.id} className="item-card">
                                <p>{item.name}</p>
                                <span><i className="fas fa-plus-circle" onClick={() => addItem(item)}></i></span>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </>
    )
}

export default ItemList
