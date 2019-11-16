import React, { Component } from 'react';
import  MyResume  from '../assets/images/resume.jpeg';
import '../assets/sass/added-fonts/AddedFonts.scss';
import HeaderRes from '../components/HeaderRes';



export default class ResumePage extends Component {
  render() {
    return (
      <>
      <HeaderRes />
      <div className='resume' >
        <img className="img-fluid mb-3 mb-lg-0 resume" src={MyResume} alt="" />
      </div>
      </>
    )
  }
}
