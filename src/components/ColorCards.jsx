const ColorCards = ( props ) => {

    console.log(props)
    const styleMain = {
        backgroundColor: props.colorCode,
        width: '10vw',
        height: '300px',
        margin: '5rem',
        boxShadow: '6px 7px 10px 0px black,0px -6px 10px 0px black'
    }

    const styleChildDiv = {
        backgroundColor: 'white',
        padding:'1rem'
    }

    const styleH6 = {
        color: props.colorCode,
        padding: '0px',
        margin:'0px'
    }

    const styleH2 = {
        padding: '0px',
        margin:'0px'
    }

    return (
        <div style={styleMain}>
            <div style={ styleChildDiv }>
                <h2 style={styleH2}>{props.colorCode}</h2>
                <h6 style={styleH6}>{ props.colorName}</h6>
            </div>
        </div>
    )
};

export default ColorCards;