const ArrowFunctionalComponent :() => Element =() : Element => {
    const title = "Is a Arrow Functional Component";
    //return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
    return(
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            {/*<div className="text-center text-xl"></div>*/}
            {/*    <h1></h1>*/}
            {/*    <h2 id="text"></h2>  // h2#text + tab*/}

        </>
    )
}

export default ArrowFunctionalComponent;
