
export const ContactLink = ({link,imagePath,text}) => {
    return (
        <a className="blue-link" href={link}>
            <img src={imagePath}/>
            <p className="blue-link-text">{text}</p>
        </a>

    );
}