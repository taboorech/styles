import './Layout.scss';

export default function Layout(props) {
  return(
    <>
      { /* Navbar */ }
      <main>
        {props.children}
      </main>
      { /* Footer */ }
    </>
  )
}