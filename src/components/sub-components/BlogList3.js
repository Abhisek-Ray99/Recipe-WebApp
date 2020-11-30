import React from 'react';
import Card from './Card';
import './skeleton.css';

const BlogList3 = ({ list }) => {
    return (
        <ul className="list">
          {list.items3.map((item, index3) => {
            return <Card key={index3} item={item}/>;
          })}
        </ul>
    );
};

export default BlogList3;
