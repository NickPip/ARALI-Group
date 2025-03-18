import { Metadata } from "next";

export const metadata: Metadata = {
  title: "საგზაო მშენებლობა - ARALI Group",
  description: "ARALI Group-ის საგზაო მშენებლობის გვერდი.",
};

export default function RoadConstructionPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  საგზაო მშენებლობა
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი
                  </span>{" "}
                  – 16-წლიანი გამოცდილებით{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    საგზაო ინფრასტრუქტურის განვითარების ლიდერი
                  </span>{" "}
                  საქართველოში.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჩვენ მიერ{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    დაგებული და რეაბილიტირებული გზების საერთო სიგრძე X0,000 კმ-ს
                    აჭარბებს
                  </span>
                  , რაც ქვეყნის მასშტაბით ერთ-ერთი ყველაზე მასშტაბური პროექტია.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  არალის{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    მატერიალურ-ტექნიკური ბაზა
                  </span>{" "}
                  აღჭურვილია უახლესი, ევროპული სტანდარტების შესაბამისი{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    სამშენებლო ტექნიკითა და აპარატურით
                  </span>
                  , რაც საშუალებას გვაძლევს დავასრულოთ საგზაო სამუშაოები{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    უმოკლეს ვადებში და უმაღლესი ხარისხით
                  </span>
                  .
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი საგზაო მშენებლობის ძირითადი მიმართულებები:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🚧 მაგისტრალების მშენებლობა და რეაბილიტაცია</li>
                  <li>🛣️ შიდა გზების დაგება</li>
                  <li>🌉 ხიდების მშენებლობა და აღდგენა</li>
                  <li>🚦 საგზაო უსაფრთხოების ინფრასტრუქტურა</li>
                  <li>🏗️ ასფალტ-ბეტონის სამუშაოები</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road1.jpg"
                    alt="საგზაო მშენებლობის პროექტი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road2.jpg"
                    alt="ინფრასტრუქტურული სამუშაოები"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road3.jpg"
                    alt="გზის რეაბილიტაცია"
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
