import {ColorRing } from 'react-loader-spinner'

const Loader = () => {
    return(
        <div className="fixed top-[0%] left-[0%] h-[100vh] w-[100%] flex justify-center items-center bg-[#000000A5] z-[16]">
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
</div>
    )
}

export default Loader