import React, { Component } from 'react';
import '../styles/Home.css';
import AboutImage from '../images/about-us-leaf.jpg';
import FacilitiesImage from '../images/facilities-billiards.jpg';
import ContactUsImage from '../images/contact-us-phone.jpg';

export class Home extends Component {
    static displayName = Home.name;

    onCounterBtnClick = () => {
        this.props.history.push(`/counter`);
    }

    onFetchDataBtnClick = () => {
        this.props.history.push(`/fetch-data`);
    }

    onMembersListClick = () => {
        this.props.history.push(`/members-list`);
    }

    static displayMap() {
        return (
            <div className="mapouter">
                <div className="gmap_canvas">
                    <h2>Location</h2>
                    <p>
                        <iframe
                            title="maps"
                            width="600"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=colinas%20verdes%20club&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0">
                        </iframe>
                    </p>
                </div>
            </div>
        );
    }

    static displayHomeCards() {
        return (
            <div className="home-main-div">
                <div className="card home-cards">
                    <img className="card-img-top" src={AboutImage} alt="About Us" />
                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">
                            COLINAS VERDES is a part of a master planned community that will provide residents basic needs within the neighborhood. Shops, workplaces and civic buildings are in close proximity to the residential area.
                        </p>
                        <a href="/add-members" className="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div className="card home-cards">
                    <img className="card-img-top" src={FacilitiesImage} alt="Facilities" />
                    <div className="card-body">
                        <h5 className="card-title">Facilities</h5>
                        <p className="card-text">
                            Experience First Class Amenities in our Luxurious Country Clubhouse. NOW OPEN TO SERVE YOU! Become a LOT OWNER NOW and you get your COUNTRY CLUB MEMBERSHIP FREE!
                        </p>
                        <a href="/fetch-data" className="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div className="card home-cards">
                    <img className="card-img-top" src={ContactUsImage} alt="Contact Us" />
                    <div className="card-body">
                        <h5 className="card-title">Contact Us</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/members-list" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }

    static displayButtons() {
        return (
            <div className="home-main-div">
                <div className="home-side-divs"></div>
                <div className="home-middle-div">
                    <table className="home-buttons-table">
                        <tbody>
                            <tr>
                                <td>
                                    <button className="btn btn-primary btn-lg home-buttons" onClick={this.onCounterBtnClick}>Counter</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-lg home-buttons" onClick={this.onFetchDataBtnClick}>Fetch Data</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-lg home-buttons" onClick={this.onMembersListClick}>Members List</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="home-side-divs"></div>
            </div>
        );
    }

  render () {
      return (
          <div>
              {/*Home.displayButtons()*/}
              {Home.displayHomeCards()}
              {Home.displayMap()}
          </div>
    );
  }
}
