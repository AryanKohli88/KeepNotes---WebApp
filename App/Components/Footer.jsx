import react from "react"

function Footer(){
    let date = new Date();
    return <footer>
    <p>This App was made by Aryan Kohli &copy; {date.getFullYear()} </p>
    </footer>
}

export default Footer