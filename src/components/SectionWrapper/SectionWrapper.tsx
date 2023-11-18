import React from 'react';

interface IProps {
    title: string;
    desc?: string[];
    children?: React.ReactNode;
}

const SectionWrapper = ({ title, desc, children }: IProps) => {
    return (
        <div className='md:my-20'>
            <h2 className='mb-3'>{title}</h2>
            {desc && (
                <p className='text-secondaryGrey mb-16'>
                    {desc.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            )}
            {children}
        </div>
    );
};

export default SectionWrapper;
