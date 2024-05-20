import { useParams, Navigate } from "react-router-dom";
import { portofolioList } from "../data/DataPortofolio";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import '../styles/DetailPortofolio.css'

function DetailPortofolio() {
    const { id } = useParams()
    const data = portofolioList.find((item) => item.id === id)
    // console.log(data);
    if (data == undefined) {
        return <Navigate to={'/page-not-found'} />
    }
    return (
        <>
            <Navbar />
            <section id="detail-portofolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt="" />
                    <p className="skill">Sklills: {data.skill}</p>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default DetailPortofolio
