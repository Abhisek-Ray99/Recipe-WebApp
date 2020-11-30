import React from 'react';
import Card from './Card';
import './skeleton.css';

const BlogList2 = ({ list }) => {
    return (
        <ul className="list">
          {list.items2.map((item, index2) => {
            return <Card key={index2} item={item}/>;
          })}
        </ul>
    );
};

export default BlogList2;
