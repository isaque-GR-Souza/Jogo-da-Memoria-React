function Carta({item,id, handleClick}){
    const itemClass = item.stat ?  " active " + item.stat : "";

    return (
        <div className={"carta" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Carta