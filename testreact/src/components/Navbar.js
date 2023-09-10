import dota2 from "../assets/icons/dota-2.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import steam from "../assets/icons/steam-logo.png";
import menu from "../assets/icons/menu.png";

function Navbar ()   {
    return (
        <div className="flex justify-between items-center">  
        <img src={menu} alt="menu" width={80} className="cursor-pointer" />

            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="www.dota2.com" target=" blank" >
                        <img src={facebook} alt="facebook" width={80} />{""}
                    </a>
                </li>
                <li className="px-2">
                <a href="https://www.dota2.com" target=" blank" >
                        <img src={instagram} alt="instagram" width={80} />{""}
                    </a>
                </li>
                <li className="px-2">
                <a href="https://store.steampowered.com/" target=" blank" >
                        <img src={steam} alt="steam" width={80} />{""}
                    </a>
                </li>
                <li className="px-2">
                <a href="https://www.dota2.com/home" target=" blank" >
                        <img src={dota2} alt="dota2" width={80} />{""}
                    </a>
                </li>
            </ul>
        </div>
    );
}

 

export default Navbar;
