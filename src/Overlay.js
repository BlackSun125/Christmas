export default function Overlay({ inside, setInside }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
          }}>
          Cuộn chuột để nhìn vào bên trong!!
        </button>
        <br />
        Created with love by Black Sun.
      </footer>
    </>
  )
}
