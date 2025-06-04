import React from 'react';

type ContainerProps = {

};

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({ children }) => {

    return <div className='min-h-screen'>{children}</div>
}
export default Container;