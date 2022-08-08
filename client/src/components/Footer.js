import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className='footerUpContainer'>
                    <div className='gridContainer'>
                        <ul className='gridElement'>
                            <li>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum, culpa enim aliquid saepe omnis temporibus sed, maxime sit voluptatibus, ex ducimus a accusantium quis hic iste eum assumenda odit.</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusantium architecto est adipisci. Tempora alias placeat earum beatae. Sed obcaecati itaque culpa hic quam accusamus at consequatur doloremque explicabo natus?</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores, unde at laboriosam, laborum libero totam architecto eligendi ipsum voluptatem id veniam voluptas ducimus esse ab delectus cum ut perferendis.</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='footerDownContainer'>
                    <span className='footerText'>Paolo Belforte © 2022</span>
                </div>
            </footer>

        </>
    )
}
