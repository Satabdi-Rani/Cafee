import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date,hashtags, reading_time} = blog;
    return (
        <div>
            <img className='' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className='text-4xl'> {title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="http://">#{hash}</a></span> 
                     )
                }
            </p>
            
        </div>
    );
};

export default Blog;