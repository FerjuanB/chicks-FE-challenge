import { FooterMenu } from "./FooterComponents/FooterMenu"
import { NavFooter } from "./FooterComponents/NavFooter"

export const Footer = () => {
  return (
    <>
      <footer>
        <NavFooter/>
        <section className="footer-section">

        </section>
        <FooterMenu/>
        <p className="copyright"> © 2017-2020 Chicksgold.com. All Rights Reserved</p>
      </footer>
    </>
  )
}