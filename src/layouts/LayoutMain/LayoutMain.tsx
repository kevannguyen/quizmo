import React from 'react';

export const LayoutMain = ({children}: React.PropsWithChildren) => {
    return (
        <div className="p-4">
            {children}
        </div>
    );
};
