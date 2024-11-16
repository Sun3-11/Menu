const Header = ({ language }) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl inline-block relative mt-3">
        {language === "ar" ? "قائمة الطعام" : "Menu"}
        <span className="block w-full h-1 bg-amber-500 mt-5"></span>
      </h1>
    </header>
  );
};

export default Header;
