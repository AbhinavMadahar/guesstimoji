import { Socket } from "socket.io-client";
import { connect, useDispatch } from 'react-redux';
import { roomLeft } from '../redux/roomSlice';
import { cleared } from '../redux/gameLogSlice';
import { reset } from '../redux/opponentBoardSlice';
import { playerReset } from '../redux/playersSlice';

interface LeaveRoomButtonProps {
    socket: Socket;
    roomID: string;
    roomLeft: any;
    cleared: any;
}

const LeaveRoomButton = ({socket, roomID, roomLeft, cleared} : LeaveRoomButtonProps) => {
    const dispatch = useDispatch();

    const leaveRoom = () => {
        socket.emit('client:room/roomLeft');
        dispatch(roomLeft());
        dispatch(cleared());
        dispatch(reset());
        dispatch(playerReset());
    }

    return (
        <div>
            <button type='button' className='golden-button' onClick={leaveRoom}>
                LEAVE GAME
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    roomLeft,
    cleared,
};

export default connect(() => ({}), mapDispatchToProps)(LeaveRoomButton);
