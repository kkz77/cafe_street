import Card from '../components/Card/Card'
import '../App.css'
import { useMenu } from '../layouts/BaseLayout'
import { useMemo } from 'react'
export default function MenuPage() {
    const menu =  useMenu()
    console.log(menu)
    return (
        <>
            <div className="container">
                <div id='menu' className="special-menu">
                    <div className="title">Special Menu <span>for you</span></div>
                    <div className="cards">
                        {/* <Card rating={"4.8"} name={"Sandwich"} price={"15k"} img={"menu1.png"} description={"bread with meat and vegetables"} />
                        <Card rating={"4.8"} name={"Hot Milk"} price={"20k"} img={"menu2.png"} description={"Hot Milk with less sugar"} />
                        <Card rating={"4.9"} name={"Coffee Ice Cream"} price={"25k"} img={"menu3.png"} description={"Coffee with ice-cream vanilla"} />
                        <Card rating={"4.7"} name={"Cappuccino"} price={"20k"} img={"menu4.png"} description={"Hot Cappuccino"} />
                        <Card rating={"4.8"} name={"Moccacinno"} price={"25k"} img={"menu5.png"} description={"Hot Moccacino"} />
                        <Card rating={"4.9"} name={"Waffle Ice Cream"} price={"22k"} img={"menu6.png"} description={" Waffle with Ice cream"} /> */}
                        {menu ?
                        (menu.map((m) => <Card rating={"4.9"} name={m.name} price={m.price} img={m.image} description={m.description} /> ))
                        :("No item in the menu list")} 
                    </div>
                </div>
            </div>
        </>
    )
}