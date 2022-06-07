import Navigation from "./Navigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";


function Layout(props) {
  return (
    <>
      <div className={classes.layout} >
        <Navigation/>
        <main>
            {props.children}
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout