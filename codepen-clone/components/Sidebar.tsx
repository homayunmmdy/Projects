import React from 'react'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className="hidden sm:flex fixed top-0 left-0 justify-center flex-col min-h-[100dvh] w-max px-8 bg-cp-color-12 text-white">
      Sidebar
    </div>
  );
}

export default Sidebar