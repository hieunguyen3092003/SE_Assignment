export default function Header() {
    // if on login page, render a different header
    if (location.pathname === '/login') {
        return (
            <p>Header login role selection</p>
        );
    }

    else if (location.pathname === '/login/student') {
        return (
            <p>Header login student</p>
        );
    }

    else if (location.pathname === '/') {
        return (
            <p>Header home</p>
        );
    }

    else if (location.pathname === '/my-reservations') {
        return (
            <p>Header my reservations</p>
        );
    }
}