import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

const SongDetail = ({ selectedSong }) => {
    return (
        selectedSong && (
            <Card title="Your selected song" style={{ width: 300 }}>
                <p>Title: {selectedSong.title}</p>
                <p>Duration: {selectedSong.duration}</p>
            </Card>
        )
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong,
    };
};

export default connect(mapStateToProps)(SongDetail);
