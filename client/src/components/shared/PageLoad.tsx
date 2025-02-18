import { CgSpinner } from 'react-icons/cg'

const PageLoad = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <CgSpinner className="animate-spin text-xl z-30"  /> 
    </div>
  )
}

export default PageLoad