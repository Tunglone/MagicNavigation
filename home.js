import { HiAcademicCap, HiBriefcase, HiChatAlt, HiGlobeAlt, HiSearchCircle } from 'react-icons/hi'
import { useState } from "react" 

export default function Home() {

    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)

    // moi lan click vao 1 nut: thay doi classname thanh active, xoa cac active dang ton tai

    const activeItem = (item) => {
        // xoa cac active cu
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        // tham active moi
        switch (item) {
            case 1: setActive1(true)
                break
            case 2: setActive2(true)
                break
            case 3: setActive3(true)
                break
            case 4: setActive4(true)
                break
            case 5: setActive5(true)
                break
        }
    }

    return <div className="home">
        <div className="navigation">
            <ul>
                <li onClick={ () => activeItem(1) } className={`list ${active1 && "active"}`}>
                    <a href="#">
                        <span className="icon"><HiAcademicCap /></span>
                        <span className="text">Academy</span>
                    </a>
                </li>
                <li onClick={ () => activeItem(2) } className={`list ${active2 && "active"}`}>
                    <a href="#">
                        <span className="icon"><HiBriefcase className="i" /></span>
                        <span className="text">Bag</span>
                    </a>
                </li>
                <li onClick={ () => activeItem(3) } className={`list ${active3 && "active"}`}>
                    <a href="#">
                        <span className="icon"><HiChatAlt className="i" /></span>
                        <span className="text">Messages</span>
                    </a>
                </li>
                <li onClick={ () => activeItem(4) } className={`list ${active4 && "active"}`}>
                    <a href="#">
                        <span className="icon"><HiGlobeAlt className="i" /></span>
                        <span className="text">Map</span>
                    </a>
                </li>
                <li onClick={ () => activeItem(5) } className={`list ${active5 && "active"}`}>
                    <a href="#">
                        <span className="icon"><HiSearchCircle /></span>
                        <span className="text">Search</span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    </div>
}
