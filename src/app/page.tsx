import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

const Home = () => {
  return (<div>
    <Header></Header>

    <h1 className="green">This Is Home Page</h1>
    <h2 className="red">This Is Hero Section</h2>
  
    <Footer></Footer>
    </div>)
}

export default Home