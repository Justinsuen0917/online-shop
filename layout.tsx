import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Online Shop</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2025 Online Shop</p>
            </footer>
        </div>
    );
};

export default Layout;
