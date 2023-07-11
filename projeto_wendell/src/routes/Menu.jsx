import Link from '@mui/material/Link';



export default function Root() {
    return (
      <>
        <div id='cabeça'>
         <h1 id='Top'>DEJU DOCES</h1>
        </div>
        <div id='Imagem'>
          <h1> Logo</h1>
          
        
        </div>

        <button id="menu">
          <nav>
            <ul>
              <a href={`/Item`}>Cardapio</a>
            </ul>
          </nav>
        </button>
        <button id="menu">
          <nav>
            <ul>
              <a href={`/Cliente`}>Cadastre-se</a>
            </ul>
          </nav>
        </button>
        <button id="menu">
          <nav>
            <ul>
            <Link href="https://www.instagram.com/dejudoces1/">Instagram</Link>
            </ul>
          </nav>
        </button>
        
      </>
    );
}
