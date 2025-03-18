import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ბეტონის წარმოება - Arali Group",
  description: "ARALI Group-ის ბეტონის წარმოების გვერდი.",
};

export default function ConcreteProductionPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ბეტონის წარმოება
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი
                  </span>{" "}
                  წლებია თავად უზრუნველყოფს ბეტონის წარმოებას და მომარაგებას
                  როგორც საკუთარი სამშენებლო პროექტებისთვის, ასევე სხვადასხვა
                  კერძო და სახელმწიფო დამკვეთებისთვის.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ამ ეტაპზე კომპანია ფლობს{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    X ბეტონის მწარმოებელ ობიექტს
                  </span>{" "}
                  საქართველოს მასშტაბით, რომლებიც უზრუნველყოფენ{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    X-XX მ³/სთ
                  </span>{" "}
                  წარმადობას. ბეტონის წარმოება ხორციელდება თანამედროვე
                  ტექნოლოგიებისა და ეკოლოგიური სტანდარტების დაცვით, რაც მაღალი
                  ხარისხისა და გამძლეობის გარანტიაა.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჩვენი საწარმოო პროცესები მორგებულია ყველა ტიპის სამშენებლო
                  პროექტზე და აკმაყოფილებს უმაღლეს ტექნიკურ მოთხოვნებს. არალი
                  გთავაზობთ სხვადასხვა კლასისა და სპეციფიკაციების ბეტონს,
                  რომელიც შეესაბამება კონკრეტული პროექტის საჭიროებებს.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი ბეტონის წარმოების ძირითადი მიმართულებები:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🏗️ სტანდარტული და მაღალსიძლიერის ბეტონის წარმოება</li>
                  <li>
                    🏢 ინდუსტრიული და კომერციული მშენებლობებისთვის ბეტონის
                    მიწოდება
                  </li>
                  <li>🌉 ხიდებისა და გზების ბეტონის კონსტრუქციები</li>
                  <li>🏠 საცხოვრებელი კომპლექსებისთვის ბეტონის მომარაგება</li>
                  <li>
                    ⚙️ სპეციფიკური პროექტებისთვის ცემენტისა და ბეტონის
                    დანამატები
                  </li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/conce/conce1.jpg"
                    alt="ბეტონის წარმოების პროცესი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/conce/conce2.jpg"
                    alt="ბეტონის ქარხანა"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/conce/conce3.jpg"
                    alt="სამშენებლო პროექტებისთვის ბეტონის მიწოდება"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ექსპერტიზა:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🔍 ბეტონის ხარისხის კონტროლი და ტესტირება</li>
                  <li>📑 სამშენებლო ნორმების შესაბამისობის უზრუნველყოფა</li>
                  <li>🚛 ბეტონის ტრანსპორტირება და დროული მიწოდება</li>
                  <li>
                    🏗️ სამშენებლო ობიექტებზე ბეტონის სპეციალური ნარევების
                    მიწოდება
                  </li>
                  <li>⚙️ თანამედროვე დანადგარებით აღჭურვილი საწარმოო ბაზა</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
