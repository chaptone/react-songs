import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:50' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'คิดฮอดจังเลย', duration: '3:35' },
        { title: 'พันทิป', duration: '4:40' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
