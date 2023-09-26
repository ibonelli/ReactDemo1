import { RxPlus } from "react-icons/rx";
import { useRef } from 'react';

/*
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

    <form className='addForm' onSubmit={handleSubmit}>

    ref={inputRef}

    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    
    onClick={() => inputRef.current.focus()}
*/

const AddItem = () => {
    const inputRef = useRef();

    return (
        <form className='addForm'>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
            />
            <button
                type='submit'
                aria-label='Add Item'
            >
                <RxPlus />
            </button>
        </form>
    )
}

export default AddItem