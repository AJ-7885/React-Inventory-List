import { PropTypes } from 'react'
import { addItem } from '../../actions'

export const AddItemForm = ({ onAddItem=f=>f, router}) => {

    let _itemName

    const submit = e => {
        e.preventDefault()
        onAddItem({
            itemName: _itemName.value,
            itemCount: 1
        })
//         store.disptach(
//                 addItem(onAddItem)
//         )
        onAddItem(onAddItem.itemName)
        console.log(onAddItem.itemName)
       router.push('/')
        _itemName.value = ''
    }

    return (
        <form onSubmit={submit} >
            <label htmlFor="item-name"> Name Item</label>
            <input id="item-name" type="text" ref={(input) => _itemName = input } />     
            <button>Add Item</button>
        </form>
    )
}
AddItemForm.propTypes = {
    onAddItem: PropTypes.func,
    router: PropTypes.object
}

export default AddItemForm