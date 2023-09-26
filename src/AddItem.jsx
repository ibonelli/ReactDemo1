import { RxPlus } from "react-icons/rx";
import { useRef } from 'react';

/*
    ref={inputRef}
    
    onClick={() => inputRef.current.focus()}
*/

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
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