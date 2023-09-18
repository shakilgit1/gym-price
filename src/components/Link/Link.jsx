import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (

    <li className="mr-3 hover:bg-red-500 p-2">
      <a href={route.path}>{route.name}</a>
    </li>

  );

};

Link.propTypes = {
    route:PropTypes.object
};

export default Link;
