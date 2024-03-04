"use client";

import { useState } from "react";
interface Props {
  Btntitle: string;
  title: string;
  body?: string;
  code?: string;
}
const Modal = ({ Btntitle, title, body, code }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        {Btntitle}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden fixed  left-0 right-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold">{title}</h3>
                  <button onClick={() => setShowModal(false)}>
                    <span className=" text-red-600">×</span>
                  </button>
                </div>
                {body ? (
                  <div className="relative p-6 flex-auto text-gray-700 h-80 overflow-y-auto">
                    {body}
                  </div>
                ) : (
                  <pre className="language-python relative p-6 flex-auto bg-gray-900 h-80 overflow-y-auto">
                    <code className="text-sm">{code}</code>
                  </pre>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
