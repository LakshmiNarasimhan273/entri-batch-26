import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

function NotesForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const handleAddnote = (e) => {
        e.preventDefault();

        // formData
        const newNote = {
            id: Date.now(),
            title,
            description,
            category
        };

        dispatch(addNote(newNote));

        setTitle("");
        setDescription("");
        setCategory("");

    }

    return (
        <div>
            <form onSubmit={handleAddnote} className='bg-gray-100 shadow-lg rounded-xl p-6 mb-8'>
                <h2 className='text-xl font-semibold mb-4'>Add New Note</h2>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full border p-2 rounded mb-3'
                    type="text" placeholder='Note Title' />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full border p-2 rounded mb-3'
                    placeholder='Description'></textarea>

                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full border p-2 rounded mb-3'
                    type="text" placeholder='Category' />

                <button className='bg-purple-600 text-white px-4 py-2 rounded cursor-pointer'>Add Note</button>

            </form>
        </div>
    )
}

export default NotesForm