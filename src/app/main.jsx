import React, { useEffect } from "react";


const Header = ({children, backgroundImage}) => {
    const style = (backgroundImage)? {'backgroundImage': `url(${backgroundImage})`}:{};
    return (
        <div className="main__header" style={style}>
            {children}
        </div>
    );
}

const OverviewCard = React.forwardRef(({icon, backgroundImage, children, href},ref) => {
    const style = (backgroundImage)? {'backgroundImage': `url(${backgroundImage})`}:{};
    return (
        <a className="overviewcard" href={href} ref={ref}>
            <div class="overviewcard__icon" style={style}>{icon}</div>
            <div class="overviewcard__info">{children}</div>
        </a>
    );
});

const Overview = ({children}) => {
    return (
        <div className="main__overview">
            {children}
        </div>
    );
}


const Card = React.forwardRef(({hero,title,children, height, href},ref) => {
    const style = (height)? {'height': height}:{};
    return (
        <a className="card" style={style} href={href} ref={ref}>
            <img src={hero} alt={`${title} image`} />
            <h1>{title}</h1>
            {children}
        </a>
    );
});

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