

import React, { useEffect, useCallback } from "react";
import { useSocket } from '../context/SocketProvider';  // Make sure to import the useSocket hook

const RoomPage = () => {
    const socket = useSocket();

    const handleUserJoined = useCallback(({ email, id }) => {
        console.log(`Email ${email} joined room`);
    }, []);

    useEffect(() => {
        socket.on('user:joined', handleUserJoined);

        return () => {
            socket.off('user:joined', handleUserJoined);
        };
    }, [socket, handleUserJoined]);

    return (
        <div>
            <h1>Room Page</h1>
        </div>
    );
};

export default RoomPage;
