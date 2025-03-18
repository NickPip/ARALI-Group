import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "კარიერები - ARALI Group",
  description: "ARALI Group-ის კარიერების გვერდი.",
};

export default function QuarriesPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  კარიერები
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი
                  </span>{" "}
                  ფლობს მაღალტექნოლოგიურ ქვიშისა და ხრეშის კარიერებს, რომლებიც
                  აწარმოებენ და ამარაგებენ სამშენებლო მასალებს უმაღლესი
                  სტანდარტებით. ჩვენი კარიერები მოიცავს ბეტონის აგრეგატებს,
                  ასფალტს, დალუქულ აგრეგატებს, დამსხვრეულ ქანებს, ტროტუარის
                  მასალას და სხვა სპეციფიკურ სამშენებლო პროდუქტებს.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    კარიერები განლაგებულია:
                  </span>{" "}
                  მათი სტრატეგიული მდებარეობა საშუალებას იძლევა სწრაფი და
                  ეფექტური მიწოდება სხვადასხვა სამშენებლო პროექტისთვის.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი კარიერების პროდუქცია:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>⛏️ ბეტონის აგრეგატები</li>
                  <li>🛣️ ასფალტის წარმოებისთვის საჭირო მასალები</li>
                  <li>🏗️ დამსხვრეული ქანები და ხრეში</li>
                  <li>🚧 გზის საყრდენი და ქვე-ბაზის მასალები</li>
                  <li>🧱 ტროტუარის საფარის მასალები</li>
                  <li>🔨 სპეციალური სამშენებლო მინერალები</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/quarries/quarries2.jpg"
                    alt="კარიერის სამუშაო პროცესი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/quarries/quarries1.jpg"
                    alt="სამშენებლო მასალების წარმოება"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/quarries/quarries3.jpg"
                    alt="ხარისხიანი მასალების მომარაგება"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
