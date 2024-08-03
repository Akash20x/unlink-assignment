import { Link } from 'react-router-dom';


const LinkImage = ({ link, imgSrc, altText }) => {
    
    return link ? (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={altText} className="w-fit cursor-pointer h-fit svg-link" />
        </Link>
    ) : (
        <img src={imgSrc} alt={altText} className="w-fit cursor-not-allowed h-fit" />
    );
};

export default LinkImage;
