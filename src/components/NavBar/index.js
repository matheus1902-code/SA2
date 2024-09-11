import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Link>Menu</Link>
            <a href="/"><button>Primeiro</button></a>
            <a href="/segundo"><button>Segundo</button></a>
            <a href="/terceiro"><button>Terceiro</button></a>
        </>
    
    );
}

export default NavBar;