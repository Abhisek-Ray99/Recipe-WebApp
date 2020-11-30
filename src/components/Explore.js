import React, {useState, useEffect} from 'react';
import { SkeletonTheme } from "react-loading-skeleton";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';
import dummyData from './dummyData/dummyData';
import dummyData2 from './dummyData/dummyData2';
import dummyData3 from './dummyData/dummyData3';
import BlogList from './sub-components/BlogList';
import BlogList2 from './sub-components/BlogList2';
import BlogList3 from './sub-components/BlogList3';
import SkeletonCard from './sub-components/skeletonCard';
import img1 from './img/alex-motoc-H5gNE2RX8Ac-unsplash.jpg';
import img2 from './img/alex-motoc-v77vc1iAK18-unsplash.jpg';
import img3 from './img/anna-onishchuk-3w2AuRZeeSU-unsplash.jpg';
import img4 from './img/shreyak-singh-0j4bisyPo3M-unsplash.jpg';
import img5 from './img/olga-team-DijH3cxId6w-unsplash.jpg';
import img6 from './img/nisha-ramesh-Q5mPPGld5Zk-unsplash.jpg';

const Explore = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setBlog(dummyData);
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timing);
    }, []);
    const [blog2, setBlog2] = useState([]);
    const [loading2, setLoading2] = useState(false);

    useEffect (() => {
        setLoading2(true);
        const timing = setTimeout(() => {
            setBlog2(dummyData2);
            setLoading2(false);
        }, 6000);
        return () => clearTimeout(timing);
    }, []);
    const [blog3, setBlog3] = useState([]);
    const [loading3, setLoading3] = useState(false);

    useEffect (() => {
        setLoading3(true);
        const timing = setTimeout(() => {
            setBlog3(dummyData3);
            setLoading3(false);
        }, 6000);
        return () => clearTimeout(timing);
    }, []);

    return (
        <div className="head-explore">
            <h1 className="explore-h1">People Like The Most</h1>
            

            <OwlCarousel
              className="owl-theme"
              items="3"
              autoplay
              dots
              loop
            >
                <div className="item">
                    <img src={img1} alt=""/>
                </div>
                <div className="item">
                    <img src={img2} alt=""/>
                </div>
                <div className="item">
                    <img src={img3} alt=""/>
                </div>
                <div className="item">
                    <img src={img4} alt=""/>
                </div>
                <div className="item">
                    <img src={img5} alt=""/>
                </div>
                <div className="item">
                    <img src={img6} alt=""/>
                </div>
            </OwlCarousel>
            
            <div className="items-main">
                <h1>All-favorite Items</h1>
                <div className="collection-main">
                {loading && <SkeletonTheme color="#FFCDD6" highlightColor="#fff"><SkeletonCard /></SkeletonTheme>}
                {!loading &&
                    blog.map((list, index) => {
                    return (
                        <div key={index}>
                            <BlogList list={list} />
                        </div>
                    );
                })}
                </div>
                <h1>Indian-Food</h1>
                <div className="collection-main">
                {loading2 && <SkeletonTheme color="#CDD6FF" highlightColor="#fff"><SkeletonCard /></SkeletonTheme>}
                {!loading2 &&
                    blog2.map((list, index) => {
                    return (
                        <div key={index}>
                            <BlogList2 list={list} />
                        </div>
                    );
                })}
                </div>
                <h1>Western Food</h1>
                <div className="collection-main">
                {loading3 && <SkeletonTheme color="#FAEBA4" highlightColor="#fff"><SkeletonCard /></SkeletonTheme>}
                {!loading3 &&
                    blog3.map((list, index) => {
                    return (
                        <div key={index}>
                            <BlogList3 list={list} />
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default Explore;
