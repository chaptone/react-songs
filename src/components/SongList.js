import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

import { List, Button } from 'antd';

const SongList = ({ songs, selectSong }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={songs}
            renderItem={(item) => (
                <List.Item key={item.title}>
                    <List.Item.Meta
                        title={item.title}
                        description={item.duration}
                    />
                    <Button onClick={() => selectSong(item)}>Button</Button>
                </List.Item>
            )}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
};

const mapDispatchToProps = {
    selectSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
