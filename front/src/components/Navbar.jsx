import React, { useRef, Fragment } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
// import cart from "/img/cart.svg"
import userIcon from "../../assets/user.svg"

export default ({ onSearch, vinos, clearInput, onChange, user, onLogout, onMouseLeave, toggle, dropdownOpen, onMouseEnter, allCategory }) => {
    const ref = useRef(null)
    return (
        <div >
            <nav className="navegador navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand" ><button className="btn btn-dark my-2 my-sm-2">WINERY</button></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {user.email ? (
                            <li className="nav-item botones" onClick={onLogout} >
                                <Link to="/login" className="nav-link"  >Log Out</Link>
                            </li>
                        ) : (
                                <Fragment>
                                    <li className="nav-item botones">
                                        <Link to="/register" className="nav-link" >Register </Link>
                                    </li>
                                    <li className="nav-item botones">
                                        <Link to="/login" className="nav-link" >Log In </Link>
                                    </li>
                                </Fragment>
                            )}
                        <li className="nav-item botones">
                            <Link className="nav-link" to="/allWines">All Products </Link>
                        </li>
                        {user.typoUsuario === "admin" || user.typoUsuario === "superAdmin" ? (
                            <li >
                                <Link className="nav-link" to="/user/admin">Admins</Link></li>) : (null)}
                        <li className="nav-item dropdown">

                            <Dropdown style={{ marginLeft: "8%" }} className="d-inline-block" onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle} >
                                <DropdownToggle caret className="btnCategNav">
                                    Categories
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="/category/red" className="dropdown-item" ><DropdownItem >Red</DropdownItem></Link>
                                    <DropdownItem divider />
                                    <Link to="/category/white" className="dropdown-item"><DropdownItem >White</DropdownItem></Link>
                                    <DropdownItem divider />
                                    <Link to="/category/rose" className="dropdown-item"><DropdownItem >Rose</DropdownItem></Link>
                                </DropdownMenu>
                            </Dropdown>



                            {/* <a onMouseOver={onMouseOver} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/category/red" className="dropdown-item" >Red</Link>
                                <Link to="/category/white" className="dropdown-item">White</Link>
                                <Link to="/category/rose" className="dropdown-item">Rose</Link>
                            </div> */}
                        </li>
                        <li>
                            <div class=" dropdown">
                                <button style={{ marginLeft: "45px" }} class=" btnCategNav btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SubCategories
                        </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {allCategory.map((category) => {
                                        return (

                                            <div><Link to={`/subcategory/${category.id}`}>{category.nombre}</Link></div>
                                        )

                                    })}
                                </div>
                            </div>
                        </li>

                    </ul>


                    <Link to="/user/profile"> <button type="button" className="btnUserNav btn btn-secondary">  <img className="imgCarrito" src="/img/user.svg" />
                        <span id="btnText">
                            {user.email ? (
                                user.username
                            ) : (
                                    null
                                )}
                        </span>
                    </button>
                    </Link>
                    <Link to="/cart"><button type="button" className="btn btn-secondary" id="btnCartNav">  <img className="imgCarrito" src="/img/cart.svg" /></button></Link>
                    <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={ref} value={clearInput} onChange={onChange}></input>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};
