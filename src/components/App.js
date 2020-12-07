import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { Row, Col } from 'antd';

const App = () => {
    return (
        <Row style={{ padding: '40px' }} justify="space-between">
            <Col xs={10}>
                <SongList />
            </Col>
            <Col xs={10}>
                <SongDetail />
            </Col>
        </Row>
    );
};

export default App;
