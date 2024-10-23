import cssStyle from "./footer.module.css"

const Footer = () => {
    return ( 
        <div className={cssStyle.footer}> 
        <a href="AboutUs"> About Us </a>
        <h1>---------------</h1>
        <a href="contact">Contact Us </a>
        </div>
    )
}

export default Footer