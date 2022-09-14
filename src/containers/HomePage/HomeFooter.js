import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; Create by Nicky Huynh in 2022. More information, please visit my email.
                    <a target='_blank' href='https://github.com/NguyenNhatHuynh?tab=repositories'> &#8594; Click here &#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
