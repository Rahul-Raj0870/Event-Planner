import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig'; // Import your Firebase config
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
function Add({ onSubmit }) {
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate inputs
        if (!title || !imageUrl || !description) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            // Create event data object
            const eventData = {
                title,
                imageUrl,
                description
            };

            // Save event data to Firestore
            await addDoc(collection(db, "events"), eventData);
            alert("Event added successfully!");

            // Reset form
            setTitle('');
            setImageUrl('');
            setDescription(''); // Clear the Quill editor

            // Call the onSubmit prop to notify parent component
            onSubmit();
        } catch (error) {
            console.error("Error adding event: ", error);
            alert("Error while Uploading...");
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
                    <ReactQuill
                        value={description} // Bind the description to React Quill
                        onChange={setDescription} // Update the state when content changes
                        placeholder="Enter the event details here..."
                    />
                </div>
                <div style={{ marginTop: '100px' }} className="d-flex">
                    <button onClick={handleSubmit} className="btn btn-success">Submit</button>
                </div>
            </div>
        </>
    );
}

export default Add;