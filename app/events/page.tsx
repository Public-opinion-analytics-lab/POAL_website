import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Media | Public Opinion Analytics Lab",
  description:
    "Events and media from the Public Opinion Analytics Lab, including the Politically In/Sane podcast.",
};

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "POAL Launch event",
      date: "May 16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Reading University, UK",
      image: "/opening.jpg?height=300&width=500&text=Conference",
      description:
        "Our launch event with various speakers and panels discussing the future of public opinion analytics.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Events &amp; Media
          </h1>

          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Podcast
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className="relative h-64 md:h-full md:col-span-2">
                  <Image
                    src="/podcast.png"
                    alt="Politically In/Sane podcast cover"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Politically In/Sane
                  </h2>
                  <p className="text-gray-700 mb-5">
                    Politically In/Sane is a Political Behaviour podcast featuring leading
                    figures in the field. It explores how people think, feel, and act
                    politically — from emotions and identities to algorithms and elections
                    — where psychology meets democracy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://pod.link/1851725697"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      Listen to the podcast
                    </Link>
                    <Link
                      href="https://politicsinsane.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    >
                      Read the Substack
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    The link opens a page with all platforms, episodes, and descriptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Events
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mb-16">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mx-auto max-w-3xl mb-8"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {event.title}
                  </h3>
                  <div className="flex flex-col items-center space-y-2 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-gray-700 mb-4 text-center">
                      {event.description}
                    </p>
                  )}
                  <Link
                    href="/event1_report.pdf"
                    target="_blank"
                    className="text-emerald-600 hover:text-emerald-800 font-medium block text-center"
                  >
                    View Event Report (PDF)
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

