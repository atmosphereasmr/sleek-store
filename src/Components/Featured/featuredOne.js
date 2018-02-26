import React, { Component } from 'react'
import '../Shop/shop.css'

import {Link} from 'react-router-dom'

export default class FeaturedOne extends Component {

    componentDidMount() {
        const MensShoes = require('../../Data/featured.js')
        this.setState({ items: MensShoes.data }, () => console.log(this.state.items))
        const tab = document.getElementById('mens-boots')
        const tab2 = document.getElementById('mens-shoes')
        const tab3 = document.getElementById('womens-shoes')
        const tab4 = document.getElementById('womens-boots')
        const tab5 = document.getElementById('womens-heels')
        tab.style = "text-decoration: none"
        tab2.style = "text-decoration: none"
        tab3.style = "text-decoration: none"
        tab4.style = "text-decoration: none"
        tab5.style = "text-decoration: none"


        //title, desc, url, price, specs, link

        this.itemClick(this.state.chosenTitle, this.state.chosenDesc, this.state.url, this.state.price, this.state.specs, this.state.link)
    }

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            chosenTitle: "Pleaser Women's Crypto",
            chosenDesc: "Be prepared to turn some heads and never be forgotten on the dance floor! From Pleaser alternative footwear company comes the Women's Crypto 106, and it's made to break and / or melt some hearts. Featuring corset-style lace design and blood-red lacy patterns along the shaft, this attractive pair of gothic women's boots also features five adjustable buckle straps and a 3.75 inch heel. Perfect for rocking the dance floor, going to industrial concerts and looking incredible for the next party - these babies are drop-dead sexy!",
            price: "$97.95",
            specs: "Available in sizes 6 US to 12 US. Shaft measures approximately 16.5 inches - heel measures approximately 3.75 inches - platform measures 0.75 inches. Price may vary depending on size of boot selected.",
            link: "http://amzn.to/2FudDSA",
            url: "https://images-na.ssl-images-amazon.com/images/I/71lyfm1p3OL._UY575_.jpg"
        }
    }

    onHover(item) {
        const fonts = document.getElementById("title" + item)
        const quick = document.getElementById('quick' + item)
        fonts.className = "item-title-hover"
        quick.className = "quick-look"
    }

    onLeave(item) {
        const fonts = document.getElementById("title" + item)
        const quick = document.getElementById('quick' + item)
        fonts.className = "item-title"
        quick.className = "quick-look-off"
    }

    itemClick(title, desc, url, price, specs, link) {
        this.setState({
            chosenTitle: title,
            chosenDesc: desc,
            price: price,
            specs: specs,
            link: link
        })
        const items = document.getElementsByName('shop-item')
        for (var i = 0; i < items.length; i++) {
            items[i].className = "item-off"
        }
        const pic = document.getElementById('chosen-pic-box')
        pic.style = `background-image: url('${url}')`
        const shop = document.getElementById('shop-container')
        const shopItems = document.getElementById('shop-section')
        const ghostItems = document.getElementsByName('shop-item')
        const chosen = document.getElementById('chosen-item')
        const goBack = document.getElementById('go-back')
        shop.style = "height: 500px;"
        shopItems.style = "display: none;"
        ghostItems.style = "display: none;"
        chosen.className = "chosen-item"
        goBack.className = "go-back"
    }

    buyClick() {
        window.location = this.state.link
    }

    render() {
        return (
            <div>
                <div className="shop-container" id="shop-container">
                    <div className="shop-off" id="chosen-item">
                        <div className="chosen-item-section" onClick={() => this.buyClick()}>
                            <div className="chosen-item-pic" id="chosen-pic-box">
                            </div>
                        </div>
                        <div className="chosen-item-section">
                            <div className="chosen-title">
                                {this.state.chosenTitle}
                            </div>
                            <div className="chosen-desc">
                                {this.state.chosenDesc}
                            </div>
                        </div>
                        <div className="chosen-item-section">
                            <div className="price-font">{this.state.price}</div>
                            <div className="order-box" onClick={() => this.buyClick()}>
                            <div className="cart">
                            </div>
                            <div>Order on Amazon</div>
                            </div>
                            <div className="specs-font">
                            {this.state.specs}
                            </div>
                        </div>
                    </div>
                    <div className="shop-section" id="shop-section">
                        {this.state.items.map(item => {
                            return (
                                <div className="item" name="shop-item" id={item[0]} onMouseOver={() => this.onHover(item[0])} onMouseLeave={() => this.onLeave(item[0])}
                                    onClick={() => this.itemClick(item[1], item[2], item[3], item[4], item[6], item[5])}>
                                    <div className="item-image" style={{ backgroundImage: `url(${item[3]})` }}>
                                        <div className="quick-look-off" id={"quick" + item[0]}>
                                            <div>QUICK LOOK</div>
                                        </div>
                                    </div>
                                    <div className="item-title" id={"title" + item[0]}>
                                        <div>{item[1]}</div>
                                    </div>
                                    <div className="item-blurb" id={"blurb" + item[0]}>
                                        <div>{item[4]}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="/">
                    <div className="shop-off" id="go-back">
                        <div>Home</div>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}