import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../ui/navigation-menu';
import React from 'react';
import { Link, To } from 'react-router-dom';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Drawer, DrawerTrigger, DrawerContent } from '../ui/drawer';

export const NavBar = () => {
    return (
        <div className="w-full h-14 flex items-center bg-background sticky top-0 z-20 border-b border-border px-4">
            <Drawer direction="left">
                <DrawerTrigger asChild>
                    <div className="w-9 h-9 z-30 rounded flex items-center justify-center hover:bg-accent sm:hidden">
                        <HamburgerMenuIcon className="w-6 h-6 cursor-pointer"></HamburgerMenuIcon>
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="h-full w-56 pl-2 pt-4 flex flex-col">
                        <Link
                            to="/"
                            className="px-4 py-2 hover:bg-accent rounded"
                        >
                            Home
                        </Link>
                        <Link
                            to="/collection"
                            className="px-4 py-2 hover:bg-accent rounded"
                        >
                            My Collections
                        </Link>
                        <Link
                            to="/collection/add"
                            className="px-4 py-2 hover:bg-accent rounded"
                        >
                            Add Collection
                        </Link>
                    </div>
                </DrawerContent>
            </Drawer>

            <div className="font-bold text-xl absolute z-20 w-full left-0 text-center sm:block sm:w-fit sm:left-auto">
                <Link to="/">Quizmo</Link>
            </div>
            <NavigationMenu className="justify-end hidden sm:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Collections
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem
                                    to="/collection"
                                    title="My Collections"
                                >
                                    Browse through your quiz collections.
                                    Sharpen your mind and test your knowledge
                                    with ease.
                                </ListItem>
                                <ListItem
                                    to="/collection/add"
                                    title="Add Collection"
                                >
                                    Create a new quiz collection easily by
                                    either manually entering questions and
                                    answers one at a time or by uploading a
                                    pre-formatted JSON object.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

const ListItem = ({
    className = '',
    title,
    children,
    to,
    ...props
}: React.PropsWithChildren<{ className?: string; title: string; to: To }>) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={to}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

export default NavBar;
