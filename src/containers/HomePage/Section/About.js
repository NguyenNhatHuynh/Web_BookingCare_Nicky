import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Những điều thú vị về Công ty StartUp Nicky
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/oigiXW6XyCQ?list=RDL0NZW6pgSLc"
                            title="Đen - một triệu like ft. Thành Đồng (M/V)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Công ty do Nguyễn Nhật Huỳnh sáng lập vào năm 2022. Với mục tiêu là đưa công nghệ tiên tiến dễ dàng áp dụng cho mọi người.
                            Không những giúp ít cho con người mà cho mội loài sinh vật trên trái đất và cả thành tinh xanh này!
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
