import Order from "../order/Order.jsx"


export default function Footer() {
    return (
    <footer className="footer">{(/*22 > new Date().getHours() && */new Date().getHours() >= 10) ?  <Order /> : "We're closed, we welcome you to return between 10:00 AM and 10:00 PM."}</footer>
    );
}