import React, { useState } from "react"
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import {  collection, addDoc } from "firebase/firestore" 
import { db } from '../firebaseConfig'// Import your Firebase config



function Add() {
   
    const { quill, quillRef } = useQuill()
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Validate inputs
        if (!title || !imageUrl || !quill.root.innerHTML) {
            alert("Please fill in all fields.")
            return
        }

        try {
            // Create event data object
            const eventData = {
                title,
                imageUrl,
                description: quill.root.innerHTML // Get the HTML content from Quill
            }

            // Save event data to Firestore
            await addDoc(collection(db, "events"), eventData);
            alert("Event added successfully!");

            // Reset form
            setTitle('')
            setImageUrl('')
            quill.setText('') // Clear the Quill editor

            // Call onSubmit callback if needed
            
        } catch (error) {
           
            console.error("Error adding event: ", error);
            alert("Error while Uploading...")
        }
    }
    
    
    

    return (
        <>
            <div className="px-3 d-flex flex-column">
                <h2 style={{ color: '#c804a4' }} className="mt-2">Add Event Details!!</h2>
                <input
                    style={{ height: '50px' }}
                    className="form-control mt-5"
                    type="text"
                    placeholder="Event Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    style={{ height: '50px' }}
                    className="form-control my-5"
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <p className="text-start">Event Description</p>
                <div style={{ width: '500px', height: '200px' }}>
                    <div ref={quillRef} />
                </div>
                <div style={{ marginTop: '100px' }} className="d-flex">
                    <button onClick={handleSubmit} className="btn btn-success">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Add;