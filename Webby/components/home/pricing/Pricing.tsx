import Link from 'next/link'
import React from 'react'
import { useTranslations } from "next-intl";


const Pricing = () => {
  const t = useTranslations("price");

  return (
    <div>
      <div className="pt-5 bg-white dark:bg-gray-900" >
  <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
    <p className="block w-full bg-gradient-to-b from-gray-700 to-gray-900 dark:from-white dark:to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
    {t("title")}
    </p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-800 dark:text-gray-400">{t("description")}</p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
       {/* First Product  */}
      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 shadow-2xl">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 text-black dark:text-white">{t("card1_title")}</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{t("card1_desc")}</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-black dark:text-white">$ 1</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product1"
          className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ">{t("order")}</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t('option1')}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t('option2')}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option3")}</li>
        </ul>
      </div>

       {/* Second Product  */}
      <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10 shadow-2xl">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" className="text-lg font-semibold leading-8 text-black dark:text-white">{t("card2_title")}</h2>
          <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">{t("most_popular")}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{t("card2_desc")}</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-black dark:text-white">$ 10</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product2"
                  className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ">
          {t("order")}</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option1")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option3/2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option4")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option5")}</li>
        </ul>
      </div>

       {/* Third Product  */}
      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 shadow-2xl">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product3" className="text-lg font-semibold leading-8 text-black dark:text-white">{t("card3_title")}</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{t("card3_desc")}</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-black dark:text-white">19 $</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <Link href="/order" aria-describedby="product3"
                  className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ">{t("order")}</Link>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option1")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option3/2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option4/2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option5/2")}</li>
          <li className="flex gap-x-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-gray-900 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>{t("option6")}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pricing
