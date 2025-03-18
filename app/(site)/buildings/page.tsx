import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "სამოქალაქო მშენებლობა - ARALI Group",
  description: "ARALI Group-ის სამოქალაქო მშენებლობის გვერდი.",
};

export default function CivilConstructionPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  სამოქალაქო მშენებლობა
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი
                  </span>{" "}
                  – ჩვენი გამოცდილება არაერთი კომპლექსური პროექტის მშენებლობას
                  და წარმატებული თანამშრომლობის მაგალითებს ითვლის, როგორც
                  ადგილობრივ, კერძო თუ სახელმწიფო, ისე საერთაშორისო
                  დამკვეთებთან.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  საცხოვრებელი, ჯანდაცვის, სტუმარ-მასპინძლობის, საჯარო თუ სხვა
                  ნებისმიერი ინფრასტრუქტურული პროექტი, რომელსაც ჩვენ
                  ვახორციელებთ, მოქალაქეთა ყოველდღიური ცხოვრების ნაწილია. ჩვენ
                  ვგეგმავთ, ვაშენებთ და რეაბილიტაციას ვუწევთ ინფრასტრუქტურას,
                  რომელსაც მნიშვნელოვანი წვლილი შეაქვს ქვეყნის ეკონომიკურ
                  განვითარებაში.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    სამშენებლო რეგულაციების და შრომის კანონის ზედმიწევნით დაცვა
                  </span>{" "}
                  ნებისმიერ პროექტზე მუშაობის პროცესში ჩვენი პრიორიტეტია.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი სამოქალაქო მშენებლობის ძირითადი მიმართულებები:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🏗️ საცხოვრებელი და კომერციული ნაგებობები</li>
                  <li>🏥 ჯანდაცვის სექტორის ინფრასტრუქტურა</li>
                  <li>🏨 სასტუმროებისა და სტუმარ-მასპინძლობის ობიექტები</li>
                  <li>🏛️ საჯარო და ადმინისტრაციული შენობები</li>
                  <li>🚧 ინფრასტრუქტურის რეაბილიტაცია და განახლება</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/building1.jpg"
                    alt="სამოქალაქო მშენებლობის პროექტი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/building2.jpg"
                    alt="ინფრასტრუქტურული სამუშაოები"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/feature1:1.jpg"
                    alt="სამშენებლო პროექტი"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ექსპერტიზა:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>
                    📑 სატენდერო პროცესის მართვა და საკონტრაქტო მოლაპარაკება
                  </li>
                  <li>
                    🛠️ მენეჯმენტის ზედამხედველობა, მათ შორის საველე შესყიდვები
                  </li>
                  <li>🏗️ სამშენებლო და საველე ადმინისტრირების წარმართვა</li>
                  <li>⚙️ ექსპლუატაციაში გაშვება და ოპერირება</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
