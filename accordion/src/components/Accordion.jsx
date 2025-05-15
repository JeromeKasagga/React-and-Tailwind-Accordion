// Contains accordion logic
function Accordion({title, content, index, openIndex, setOpenIndex}) {
    
    return(
        <>
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>{content}</div>
        </div>
        </>
    );
}

export default Accordion;