import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstading-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nội bật tuần qua
                        </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image  section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image  section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image  section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image  section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='custmozie-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image  section-outstading-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giao sư Nicky Huynh</div>
                                        <div>Cơ Xương Khớp 6</div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
