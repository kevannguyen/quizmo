import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

export const LayoutMain = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="text-foreground font-sans">
            <NavBar></NavBar>
            <div className="p-4 py-8 min-h-[calc(100vh-var(--navbar-height))] box-border bg-muted">
                {children}
            </div>
        </div>
    );
};
