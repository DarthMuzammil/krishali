const CustomForm = ({ status, message, onValidated, variant = 'light' }) => {
  let email

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value
      })
  }

  return (
    <div className='  mx-auto w-full max-w-sm space-y-2 animate-fade-in-up delay-400'>
      <form onSubmit={handleSubmit} className='flex flex-wrap gap-2'>
        {status !== 'success' && (
          <>
            <input
              type='email'
              ref={(node) => (email = node)}
              placeholder='Email'
              className='max-w-lg flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent text-black'
              required
            />
            <div className='w-full md:w-auto justify-center flex items-center '>
              <button
                type='submit'
                disabled={status === 'sending'}
                className={
                  status === 'sending'
                    ? 'inline-flex w-full md:w-auto items-center rounded-md justify-center px-4 h-8 text-xs font-medium bg-gray-300 text-gray-600 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    : 'inline-flex w-full md:w-auto items-center rounded-md justify-center px-4 h-8 text-xs font-medium hover:bg-[#7c3aed] bg-[#9333ea] text-white shadow transition duration-300 ease-in-out '
                }
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </form>
      {status === 'error' && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div className='text-center'>
          <p className='text-xl text-black font-semibold mb-4'>
            Thank you for signing up!
          </p>
          <p className='text-black'>
            Check your email for further instructions.
          </p>
        </div>
      )}
    </div>
  )
}

export default CustomForm
