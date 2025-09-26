

const Header : () => Element = () : Element => {
    return (
        <>
        <header className="bg-cf-dark-red w-full">
        <div className="conatiner mx-auto px-4 flex items-center justify-between">
            <img className="my-4 h-16"
                 src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
                 alt="CF Logo"
            />

            <nav className="flex gap-4 justify-end"><a href={"#"}>Home</a></nav>

        </div>
        </header>

        </>



    )

}
export default Header;