import React from 'react';
import { Route } from 'react-router-dom';

//local imports 
import Marketplace from './components/Marketplace'
import ListingForm from './components/ListingForm'
import RequestReview from './components/Marketplace/RequestReview'

const ResumeQContainer = () => {

  return (
    <>
      <div>
        {/* add routes for components as they're built out */}
        <div>
          <Route path='/resumeq' component={Marketplace} />
          <Route path='/resumeq/becomeacoach' component={ListingForm} />
          {/* <Route path='/resumeq/request' component={RequestReview} /> */}
        </div>
      </div>
    </>
  )
}


export default ResumeQContainer;
