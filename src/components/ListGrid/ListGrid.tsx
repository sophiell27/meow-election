import classNames from 'classnames';
import React from 'react';

interface IProps {
    className?: string;
    children: React.ReactNode;
}

const ListGrid = ({ children, className }: IProps) => {
    return (
        <ul
            className={classNames(
                `grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 ${className}`
            )}>
            {children}
        </ul>
    );
};

export default ListGrid;
