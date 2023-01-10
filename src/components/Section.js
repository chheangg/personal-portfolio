import Header from "./Header";

const Section = ({title, children}) =>  (
  <section className="section-container">
    <Header text={title} />
    {children}
  </section>
)

export default Section;