import React from 'react';

interface IProps {
    title: string;
    desc?: string[];
    children?: React.ReactNode;
}

const SectionTitle = ({ title, desc, children }: IProps) => {
    return (
        <>
            <h2 className='mb-3'>{title}</h2>
            {desc && (
                <p className='text-secondaryGrey pb-16'>
                    {desc.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            )}
            {children}
        </>
    );
};

export default SectionTitle;
