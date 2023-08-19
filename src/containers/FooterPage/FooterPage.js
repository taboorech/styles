import Footer from "../../components/Footer/Footer";

export default function FooterPage() {
  return (
    <div>
      <Footer
        mainText = {`MAIN TEXT`}
        description = {
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam congue purus id elit maximus, quis pretium eros volutpat. 
          Maecenas eleifend hendrerit tortor, non mattis dolor ultrices sit amet.`
        }
        copyRightText = {`© Copyright 2023`}
        author = {`fff`}
        authorLink = {`#!`}
      >
        <a href="#!">FFF</a>
        <a href="#!">FFF</a>
        <a href="#!">FFF</a>
      </Footer>
    </div>
  )
}