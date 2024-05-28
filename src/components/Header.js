import "./Header.css";

const Header = ({ current, completed, total }) => {
  return (
    <div className="header">
      <div>
        <b>Questions: </b>
        {current} of {total}
      </div>
      <div>
        <b>Completed: </b>
        {completed} of {total}
      </div>
    </div>
  );
};

export default Header;
