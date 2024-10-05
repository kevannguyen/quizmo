import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

export const LayoutMain = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <NavBar></NavBar>
            <div className="p-4">{children}</div>
        </>
    );
};
