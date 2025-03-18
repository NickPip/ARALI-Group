import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "მზის პანელების მონტაჟი - ARALI Group",
  description: "ARALI Group-ის მზის პანელების მონტაჟის გვერდი.",
};

export default function SolarPanelsPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  მზის პანელების მონტაჟი
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი ენერგია
                  </span>{" "}
                  გთავაზობთ მზის პანელების მონტაჟსა და განახლებად ენერგიაზე
                  გადასვლას, რომელიც უზრუნველყოფს ეკოლოგიურად სუფთა და
                  ენერგოეფექტურ გადაწყვეტილებებს.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჩვენი გუნდი უზრუნველყოფს{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    მზის ელექტროსადგურების პროფესიონალურ დაპროექტებას,
                    ინსტალაციასა და მომსახურებას
                  </span>
                  , რაც ხელს უწყობს ენერგიის დაზოგვას და გარემოს დაცვას. არალი
                  ენერგია მუშაობს თანამედროვე ტექნოლოგიებზე, რაც უზრუნველყოფს
                  მაღალი წარმადობის, უსაფრთხო და მდგრადი ენერგო სისტემების
                  შექმნას.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი სერვისები:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🌞 მზის პანელების პროფესიონალური მონტაჟი</li>
                  <li>
                    🔋 ენერგიის შენახვის სისტემები (ბატარეები და ინვერტორები)
                  </li>
                  <li>🏡 ინდივიდუალური და კომერციული პროექტების აღსრულება</li>
                  <li>🛠️ მზის ელექტროსადგურების ტექნიკური მომსახურება</li>
                  <li>📊 ენერგოეფექტურობის ანალიზი და კონსულტაცია</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar1.png"
                    alt="მზის პანელების მონტაჟი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar2.png"
                    alt="ენერგიის შენახვის სისტემა"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar3.png"
                    alt="ეკოლოგიურად სუფთა ენერგიის გამოყენება"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  რატომ უნდა აირჩიოთ არალი ენერგია?
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🔍 ხარისხიანი და სერტიფიცირებული პროდუქცია</li>
                  <li>⚡ მაღალი წარმადობის ტექნოლოგიები</li>
                  <li>🌿 ეკოლოგიურად სუფთა ენერგოსისტემები</li>
                  <li>🛠️ მონტაჟისა და ტექნიკური მომსახურების სრული პაკეტი</li>
                  <li>💡 ხანგრძლივი ექსპლუატაციის გარანტია</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
