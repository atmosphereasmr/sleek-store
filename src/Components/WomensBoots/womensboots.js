import React, { Component } from 'react'
import '../Shop/shop.css'

export default class WomensBoots extends Component {

    componentDidMount() {
        const MensShoes = require('../../Data/womens-boots')
        this.setState({ items: MensShoes.data }, () => console.log(this.state.items))
        const tab = document.getElementById('womens-boots')
        const tab2 = document.getElementById('mens-shoes')
        const tab3 = document.getElementById('womens-shoes')
        const tab4 = document.getElementById('mens-boots')
        const tab5 = document.getElementById('womens-heels')
        tab.style = "text-decoration: underline"
        tab2.style = "text-decoration: none"
        tab3.style = "text-decoration: none"
        tab4.style = "text-decoration: none"
        tab5.style = "text-decoration: none"
    }

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            chosenTitle: "",
            chosenDesc: "",
            price: "",
            specs: "",
            link: ""
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

    goBack() {
        window.location.reload()
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
                            <div className="cart-text">Order on Amazon</div>
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
                    <div className="shop-off" id="go-back" onClick={() => this.goBack()}>
                        <div>Go Back</div>
                    </div>
                </div>
            </div>
        )
    }
}