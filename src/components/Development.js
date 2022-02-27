import vector from '../assests/vector.png'
import '../components/component.css'
import wtd from '../assests/WTDLOGO.svg'
const Development = () => {
    return ( 
        <div className='dev'>
        <div className="development">
            <h1>Development By</h1>
            <div className="img">
                <div>
                <img className='devimg1' src={vector} alt="" />
                <p>Param labs</p>
                </div>
                <div>
                <img className='devimg2' src={wtd} alt="" />
                <p>WaytooDigital</p>
                </div>
            </div>
            <p className='devp'>Art by <span className='devspan'><a href="https://www.instagram.com/antonitudisco/" target="_blank"> Antoni Tudisco</a></span> </p>
            <p className='devp1'> & <br /> <span className='devspan'><a href="https://www.instagram.com/marctudisco/?hl=en" target="_blank">Marc Tudisco</a></span> </p>

           
        </div>
</div>
     );
}
 
export default Development;
