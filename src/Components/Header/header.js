import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    componentDidMount() {
        const boot1 = document.getElementById('boot-1')
        const boot2 = document.getElementById('boot-2')
        const boot3 = document.getElementById('boot-3')
        const about = document.getElementById('about')
        const home = document.getElementById('home')
        const header1 = document.getElementById('header-1')
        const header2 = document.getElementById('header-2')
        const header3 = document.getElementById('header-3')
        boot1.style = "background-image: url('https://images-na.ssl-images-amazon.com/images/I/71lyfm1p3OL._UY575_.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        boot2.style = "background-image: url('https://images-na.ssl-images-amazon.com/images/I/61MUwhuSyLL._UY575_.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        boot3.style = "background-image: url('https://images-na.ssl-images-amazon.com/images/I/6119DsGM59L._UY575_.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        about.style = "width: auto; height: auto; background-color: transparent; color: white; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        home.style = "width: auto; height: auto; background-color: transparent; color: white; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        header1.style = "width: 100%; height: auto; background-color: transparent; color: white; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        header2.style = "width: 100%; height: auto; background-color: transparent; color: white; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        header3.style = "width: 100%; height: auto; background-color: transparent; color: white; border-top-right-radius: 0px; border-top-left-radius: 0px;"
    }

    homeClick() {
        window.location.replace("http://www.gothicbootshop.com")
    }

    facebookClick() {
        window.location.replace("https://www.facebook.com/Gothic-Boot-Shop-185019148768969/")
    }

    twitterClick() {
        window.location.replace("https://twitter.com/gothicbootshop")
    }

    tumblrClick() {
        window.location.replace('https://gothicbootshop.tumblr.com/')
    }

    render() {
        return (
            <div>
                <div className="black-bar">
                    <div className="black-bar-section">
                    <Link to="/" id="home">
                        <div>Gothic Boot Shop</div>
                    </Link>
                        <div className="social-bar">
                            <div className="facebook-button" onClick={() => this.facebookClick()} />
                            <div className="twitter-button" onClick={() => this.twitterClick()} />
                            <div className="tumblr-button" onClick={() => this.tumblrClick()} />
                            <div className="instagram-button" />
                        </div>
                        <Link to="/about" id="about">
                        <div>About</div>
                        </Link>
                    </div>
                </div>
                <div className="white-bar">
                    <div className="white-bar-section">
                        <Link to="/">
                            <div className="tab" id="mens-shoes">Men's Shoes</div>
                        </Link>
                        <Link to="/mens-boots">
                            <div className="tab" id="mens-boots">Men's Boots</div>
                        </Link>
                        <Link to="/womens-shoes">
                            <div className="tab" id="womens-shoes">Women's Shoes</div>
                        </Link>
                        <Link to="/womens-boots">
                            <div className="tab" id="womens-boots">Women's Boots</div>
                        </Link>
                        <Link to="/womens-heels">
                            <div className="tab" id="womens-heels">Women's Heels</div>
                        </Link>
                    </div>
                </div>
                <div className="featured-wrapper">
                    <div className="featured-bar">
                        <div>International Brands</div>
                    </div>
                </div>






                <div className="advert-box">
                    <div className="advert-box-section">
                        <div className="advert-1">
                            <div className="advert-1-pic">
                                <Link to="/featured-item-one" id="boot-1">
                                </Link>
                            </div>
                            <Link to="/featured-item-one" id="header-1">
                            <div className="advert-header">
                                <div>Pleaser</div>
                            </div>
                            </Link>
                        </div>
                        <div className="advert-1">
                            <div className="advert-1-pic">
                                <Link to="/featured-item-two" id="boot-2">
                                </Link>
                            </div>
                            <Link to="/featured-item-two" id="header-2">
                            <div className="advert-header">
                                <div>New Rock</div>
                            </div>
                            </Link>
                        </div>
                        <div className="advert-1">
                            <div className="advert-1-pic">
                                <Link to="/featured-item-three" id="boot-3">
                                </Link>
                            </div>
                            <Link to="/featured-item-three" id="header-3">
                            <div className="advert-header">
                                <div>Summitfashions</div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>






                {/* 
                <div className="advert-box">
                    <div className="advert-box-section">
                        <div className="advert-1">
                            <div className="advert-1-pic">
                            </div>
                            <div className="advert-header">
                                <div>Pleaser</div>
                            </div>
                        </div>
                        <div className="advert-2">
                            <div className="advert-2-pic">
                            </div>
                            <div className="advert-header">
                                <div>New Rock</div>
                            </div>
                        </div>
                        <div className="advert-3">
                            <div className="advert-3-pic">
                            </div>
                            <div className="advert-header">
                                <div>Summitfashions</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}