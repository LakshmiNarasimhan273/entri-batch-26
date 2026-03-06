import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../redux/notesSlice';

function NotesList() {
    const notes = useSelector((state) => state.notes.notes);
    console.log(notes);

    const dispatch = useDispatch();

    if(notes.length === 0){
        return(
            <div className='text-center mt-20'>
                <h2 className='text-2xl font-semibold text-gray-600'>No Notes Yet</h2>
                <p className='text-gray-400 mt-2'>State by adding your first note</p>
            </div>
        )
    }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>

        {
            notes.map((data) => (
                <div key={data.id} className='bg-gray-100 rounded-xl p-6 shadow-md'>
                    <h3 className='text-lg font-bold text-gray-800'>{data.title}</h3>
                    <p className='text-gray-600 text-sm mt-3 leading-releaxed'>{data.description}</p>
                    <div className='flex items-center justify-between mt-6'>
                        <span className='text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full'>{data.category}</span>

                        <button onClick={() => dispatch(deleteNote(data.id))} className='text-sm bg-red-100 px-3 py-1 rounded-lg cursor-pointer text-red-600 font-medium'>Delete</button>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default NotesList