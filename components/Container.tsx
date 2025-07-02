import React from 'react';

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {

    return <div className='min-h-screen'>{children}</div>
}
export default Container;