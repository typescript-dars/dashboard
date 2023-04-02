import "../style/Header.scss";

const Header = ({ setfirst }: { setfirst: Function }) => {
  return (
    <div className="header">
      <h3
        onClick={() => {
          setfirst((item: boolean) => !item);
        }}
      >
        OPEN|CLOSE
      </h3>
      <h3>MAJIDOV DONIYOR</h3>
    </div>
  );
};

export default Header;
