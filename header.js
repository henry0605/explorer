function Header() {
    return (
        <header>
            <nav>
            <div className="navbar">
            <nav className="navigation">
                
                <ul className="menu">
                    <li id="brandLogo"><a href="index.html"><img src="./image/explorer-logo.png" alt=""/></a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="user"><span id="user"><i className="fa-regular fa-user"></i></span></a></li>
                    <li>
                        <button className="toggle-menu">
                            <span></span>
                        </button>
                    </li>
                </ul>
                <div id="menu" className="">
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#">Tent <span className="chinese">帳篷</span></a></li>
                            <li><a href="#">Sleeping Pad <span className="chinese">睡墊</span></a></li>
                            <li><a href="#">Table&Chair <span className="chinese">桌椅</span></a></li>
                            <li><a href="#">Cooker <span className="chinese">炊具</span></a></li>
                            <li><a href="#"><span className="more">more product 更多商品</span></a></li>
                            <li><a href="#"><button id="menu-btn">RENT GEAR 開始租賃</button></a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Canopy <span className="chinese">天幕</span></a></li>
                            <li><a href="#">Sleeping Bag <span className="chinese">睡袋</span></a></li>
                            <li><a href="#">Backpack <span className="chinese">登山背包</span></a></li>
                            <li><a href="#">Others <span className="chinese">其他</span></a></li>
                        </ul>
                        <ul className="main-nav-third">
                            <li><a href="#"><span className="third">最近消息</span></a></li>
                            <li><a href="#"><span className="third">聯絡我們</span></a></li>
                            <li><a href="#"><span className="third">會員中心</span></a></li>
                            <li><a href="#"><span className="third">關於我們</span></a></li>
                            <li><a href="#"><span className="third">租賃守則</span></a></li>
                        </ul>
                        <ul className="main-nav-forth">
                            <li><a href="#"><span className="ham-icon-1"><i className="fa-solid fa-envelope-open"></i></span></a></li>
                            <li><a href="#"><span className="ham-icon"><i className="fa-brands fa-facebook-f"></i></span></a></li>
                            <li><a href="#"><span className="ham-icon"><i className="fa-brands fa-instagram"></i></span></a></li>
                            <li><a href="#"><span className="ham-icon"><i className="fa-brands fa-line"></i></span></a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>

            </nav>
        </header>
    );
}

export default Header;