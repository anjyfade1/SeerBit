import seer from '../../assets/img/SEERBIT.svg'
import classes from './Layout.module.css'

function Footer() {
  return (
    <div className={classes.footer}>
        <div>
            <img src={seer} alt="" />
        </div>
        <div>
            Shop   /   Info   /   Service   /   Contact   /   Privacy Policy
        </div>
        <div>
            Fb   /   In   /   Yt   /   Tw
        </div>
    </div>
  )
}

export default Footer