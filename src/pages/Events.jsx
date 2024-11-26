import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Add from '../components/Add';
import Edit from '../components/Edit';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const fetchEvents = async () => {
    const eventsCollection = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCollection);
    const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventList);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDisplayAdd = () => {
    setShowAdd(prev => !prev);
    setShowEdit(false); // Hide Edit when showing Add
  };

  const displayEdit = (event) => {
    setCurrentEvent(event);
    setShowEdit(true); // Show Edit
    setShowAdd(false); // Hide Add
  };

  const handleAddSubmit = () => {
    fetchEvents(); // Refresh the events list after adding a new event
    setShowAdd(false); // Hide Add component after submission
  };

  const handleUpdate = async (updatedEvent) => {
    const eventRef = doc(db, 'events', currentEvent.id);
    try {
      await updateDoc(eventRef, updatedEvent); // Update the event in Firestore
      alert("The Event Details are updated...");
      setShowEdit(false); // Hide Edit component after update
      fetchEvents(); // Refresh the events list after editing
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'events', id));
        fetchEvents(); // Refresh the events list after deletion
      } catch (error) {
        console.error("Error deleting event: ", error);
        alert("Error deleting event!");
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: '120px', fontFamily: 'Alegreya', paddingBottom: '100px', marginInline: '80px' }}>
        <div className='d-flex justify-content-between my-4'>
          <h1 style={{ color: '#c804a4' }}>Events</h1>
          <button onClick={handleDisplayAdd} style={{ backgroundColor: '#c804a4', fontSize: '1.2rem' }} className='btn text-light'>
            Add New Event
          </button>
        </div>

        {/* Event Details */}
        <div className='d-flex gap-3'>
          {events.map(event => (
            <div key={event.id} style={{ width: '370px', textAlign: 'justify', border: 'solid #c804a4 1px' }} className='rounded mx-2 my-2'>
              <img className='rounded-top' width={'100%'} height={'250px'} src={event.imageUrl} alt="" />
              <p style={{ fontSize: '1.5rem' }} className='px-3 pt-4'>{event.title}</p>
              <div className='px-3 py-2' dangerouslySetInnerHTML={{ __html: event.description }} />
              <div className='my-3'>
                <button onClick={() => displayEdit(event)} className='btn btn-primary mx-3'>Edit</button>
                <button onClick={() => handleDelete(event.id)} className='btn btn-danger'>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {showAdd && (
          <div style={{ top: '25%', left: '50%', transform: 'translate(-50%)' }} className='position-absolute rounded text-center p-3 border border-dark bg-light'>
            <Add onSubmit={handleAddSubmit} />
          </div>
        )}
        {showEdit && currentEvent && (
          <div style={{ top: '30%', left: '50%', transform: 'translate(-50%)' }} className='position-absolute rounded text-center p-3 border border-dark bg-light'>
            <Edit event={currentEvent} onUpdate={handleUpdate} onDisplay={() => setShowEdit(false)} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;