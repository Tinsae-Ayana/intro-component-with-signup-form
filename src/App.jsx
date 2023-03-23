import { validate } from "./validate";

export default function App() {
   return (
      <div className='h-screen w-screen md:bg-desktop bg-mobile bg-proRed flex lg:flex-row flex-col justify-center items-center lg:p-[10%] p-[5%]'>
         <div className='lg:basis-1/2'>
            <h1 className='font-poppins lg:text-5xl text-2xl text-white font-bold  text-center lg:text-left'>
               Learn to code by
            </h1>
            <h1 className='font-poppins lg:text-5xl text-2xl text-white font-bold text-center lg:text-left'>
               watching others
            </h1>
            <p className='font-poppins font-semibold lg:text-[16px] text-[12px] text-white lg:text-left text-center lg:pt-8 pt-3 lg:pb-0 pb-3'>
               See how experienced developers solve problems in real time. Watching scripted
               tutorial is great. but understanding how developers think is invaluable.
            </p>
         </div>
         <div className='lg:basis-1/2 h-fit'>
            <h1 className='font-poppins lg:text-[16px] text-[10px] text-white py-5 w-full text-center shadow-2xl rounded-2xl bg-proBlue lg:mb-8 mb-3'>
               <span className='font-bold'>Try it free 7 days</span> then $20/mo. there after
            </h1>
            <form
               noValidate
               onSubmit={(e) => {
                  e.preventDefault();
                  var isValid = validate(new FormData(e.currentTarget));
                  if (isValid) {
                     e.currentTarget.submit();
                  }
               }}
               className='w-full bg-white lg:px-4 px-3  lg:py-8 py-3 rounded-2xl '
            >
               <div className='flex flex-col lg:space-y-2 '>
                  <div className='relative'>
                     <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        placeholder='First name'
                        className='block w-full border-grayishBlue border rounded-xl lg:py-3 py-2 px-5 placeholder:font-poppins 
                        placeholder:font-semibold placeholder:text-[16px] placeholder:text-gray 
                        focus:font-semibold font-poppins text-darkBlue outline-none focus:border-darkBlue focus:border-2 font-semibold'
                     />
                     <p className='firstNameError text-right text-[12px] text-proRed font-poppins font-semibold lg:pt-2 invisible'>
                        First name cannot be empty
                     </p>
                     <img
                        src='icon-error.svg'
                        alt='error icon'
                        className=' firstNameError fill-proRed absolute right-2 bottom-1/2 invisible'
                     />
                  </div>
                  <div className='relative'>
                     <input
                        id='lastName'
                        type='text'
                        placeholder='Last name'
                        name='lastName'
                        className='lastNameError block w-full border-grayishBlue border rounded-xl lg:py-3 py-2 px-5 placeholder:font-poppins 
                        placeholder:font-semibold placeholder:text-[16px] placeholder:text-gray focus:font-semibold 
                        font-poppins text-darkBlue outline-none focus:border-darkBlue focus:border-2 font-semibold'
                     />
                     <p className='lastNameError text-right text-[12px] text-proRed font-poppins font-semibold lg:pt-2 invisible'>
                        Last name cannot be empty
                     </p>
                     <img
                        src='icon-error.svg'
                        alt='error icon'
                        className='lastNameError fill-proRed absolute right-2 bottom-1/2 invisible'
                     />
                  </div>
                  <div className='relative'>
                     <input
                        id='emailAddress'
                        type='email'
                        name='emailAddress'
                        placeholder='Email address'
                        className='emailError block w-full border-grayishBlue border rounded-xl lg:py-3 py-2 px-5 placeholder:font-poppins 
                        placeholder:font-semibold placeholder:text-[16px] placeholder:text-gray focus:font-semibold font-poppins 
                        text-darkBlue outline-none focus:border-darkBlue focus:border-2 font-semibold'
                     />
                     <p className='emailError text-right text-[12px] text-proRed font-poppins font-semibold lg:pt-2 invisible'>
                        Looks like not email
                     </p>
                     <img
                        src='icon-error.svg'
                        alt='error icon'
                        className='emailError  fill-proRed absolute right-2 bottom-1/2 invisible'
                     />
                  </div>
                  <div className='relative'>
                     <input
                        id='password'
                        type='password'
                        name='password'
                        placeholder='password'
                        className='paswordError  block w-full border-grayishBlue border rounded-xl lg:py-3 py-2 px-5 
                        placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] 
                        placeholder:text-gray focus:font-semibold font-poppins text-darkBlue outline-none focus:border-darkBlue focus:border-2 font-semibold'
                     />
                     <p className='passwordError text-right text-[12px] text-proRed font-poppins font-semibold lg:pt-2 invisible'>
                        password cannot be empty
                     </p>
                     <img
                        src='icon-error.svg'
                        alt='error icon'
                        className='passwordError fill-proRed absolute right-2 bottom-1/2 invisible'
                     />
                  </div>
                  <div>
                     <button
                        type='submit'
                        className='bg-proGreen w-full lg:py-3 py-3 rounded-xl  text-white lg:text-xl text-sm shadow-2xl'
                     >
                        CLAIM YOUR FREE TRAIL
                     </button>

                     <h1 className='text-grayishBlue text-[12px] text-center font-poppins font-normal pt-3 '>
                        by clicking submit your agreeing with out{" "}
                        <span className='font-bold text-proRed'>Terms And Services</span>
                     </h1>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}
