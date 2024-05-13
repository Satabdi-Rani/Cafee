import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover} = blog;
    return (
        <div>
            <h3>Title: {title}</h3>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;