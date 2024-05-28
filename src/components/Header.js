const Header = ({ current, total }) => {
  return (
    <div>
      Questions: {current} of {total}
    </div>
  );
};

export default Header;
