import React from 'react'

function CardPost() {
  return (
    <div className="flex min-h-screen items-center justify-center">
  <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-lime-600 to-lime-300 ">
    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-600 dark:bg-gray-900">
      <p className="text-white">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

      <div className="mt-8 flex gap-4 items-center">
        <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="user photo" />
        <div>
          <h3 className="text-lg font-medium text-lime-400">Oketa Fred</h3>
          <span className="text-sm tracking-wide text-lime-400">Fullstack Developer</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardPost