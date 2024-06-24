import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const messageRef = useRef(null);

    useEffect(() => {
        axios.get('/checkOut', { withCredentials: true })
            .then(() => {
                console.log("Logged out successfully");
                setMessage('SEE U DOG');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch(err => {
                console.error("Error logging out:", err);
            });

        const intervalId = setInterval(() => {
            if (messageRef.current) {
                const p = document.createElement('p');
                p.textContent = 'SEE U DOG';
                messageRef.current.appendChild(p);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <div>
            <h1>Logging Out...</h1>
            <div ref={messageRef}></div>
        </div>
    );
}

export default Logout;
