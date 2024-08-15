
export const TitleHighlighted = ({normalText,textHighlighted}) =>{
    return (
    <h1 className="container-title">
        {normalText}
        <strong className="title-light-blue">{textHighlighted}</strong>
    </h1>
    );    
}