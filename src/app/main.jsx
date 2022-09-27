import React, { useEffect } from "react";
import "./main.module.css";


const Header = ({children, backgroundImage}) => {
    const style = (backgroundImage)? {'backgroundImage': `url(${backgroundImage})`}:{};
    return (
        <div className="main__header" style={style}>
            {children}
        </div>
    );
}

const OverviewCard = ({icon, backgroundImage, children}) => {
    const style = (backgroundImage)? {'backgroundImage': `url(${backgroundImage})`}:{};
    return (
        <div className="overviewcard">
            <div class="overviewcard__icon" style={style}>{icon}</div>
            <div class="overviewcard__info">{children}</div>
        </div>
    );
}

const Overview = ({children}) => {
    return (
        <div className="main__overview">
            {children}
        </div>
    );
}

const Card = ({hero,title,children, height}) => {
    const style = (height)? {'height': height}:{};
    return (
        <div className="card" style={style}>
            <img src={hero} alt={`${title} image`} />
            <h1>{title}</h1>
            {children}
        </div>
    );
}

const Cards = ({children}) => {
    return (
        <div className="main__cards">
            {children}
        </div>
    );
}

const Main = ({children}) => {
    return (
        <main className="main">
            {children}
        </main>
    );
};


const Article = ({children}) => {
    return (
        <article className="main__article">
            {children}
        </article>
    );
};

export default {
    Main,
    Header,
    Overview,
    OverviewCard,
    Cards,
    Card,
    Article
};