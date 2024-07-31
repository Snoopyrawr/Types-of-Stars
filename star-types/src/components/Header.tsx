import React from 'react';

type Props = {};

const Header: React.FC<Props> = () => {
    return (
        <div>
            <h1 className='mt-10 mb-10 text-center text-3xl text-yellow-300 font-extrabold'>
                STAR TYPES
            </h1>
        </div>
    );
}

export default Header;