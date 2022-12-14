import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './attributions.css'
export default function Attributions({ user }) {
    return (
        <>
            <Header />
            <div className='attributionsContainer'>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Csharp_Logo.png">Andres15alvarez</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:C_Programming_Language.svg">ElodinKaldwin</a>, CC0, via Wikimedia Commons            <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg">™/®Microsoft</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg">www.python.org</a>, <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg">Jeremy Kratz</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Kotlin_Icon.svg">JetBrains</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Go_Logo_Blue.svg">The Go Authors</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">Chris Williams</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Code.svg">Dave Braunschweig</a>, CC0, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg">Instagram</a>, Public domain, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Linkedin_icon.svg">ZyMOS-Bot</a>, CC0, via Wikimedia Commons
                <br></br>
                <a rel='nofollow' href="https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg">GitHub</a>, <a rel='nofollow' href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons
                <br></br>
                <br></br>
                <br></br>

            </div>
            <Footer user={user} />
        </>
    )
}
