import Logo from '../assets/logonly.png';
const Loader = () => {
  return (
    <div className='flex items-center justify-center' style={{minHeight:'100vh'}}>
        <img src={Logo} alt="" className='spinner-logo' />
    </div>
  )
}

export default Loader