import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Content from './components/content';

class Home extends React.Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <div className="body-head">

                </div>
                <div className="body-main">
                    <Content />
                </div>
            </div>
        )
    }
}

export default Home;