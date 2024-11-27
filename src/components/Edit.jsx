import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const Edit = ({ event, onUpdate, onDisplay }) => {
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState(event.title);
    const [imageUrl, setImageUrl] = useState(event.imageUrl);

    if (!event) {
        return null;
    }

    useEffect(() => {
        setTitle(event.title);
        setImageUrl(event.imageUrl);
        setDescription(event.description);
    }, [event]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedEvent = {
            title,
            imageUrl,
            description // Get the HTML content from Quill
        };
        onUpdate(updatedEvent); // Pass the updated event back to the parent
    };
  

    return (
        <>
            <div className="px-3 d-flex flex-column ">
                <h2 style={{ color: '#c804a4' }} className="mt-2">Update Event Details!!</h2>
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
                    <button onClick={handleSubmit} className="btn btn-success text-light fw-bolder">Update</button>
                    <button onClick={onDisplay} className="btn btn-secondary mx-2">Cancel</button>
                </div>
            </div>
        </>
    );
};

export default Edit;