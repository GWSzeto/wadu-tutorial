'use client'

import { Search, User } from "lucide-react"

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">LearnLang</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Levels</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Radicals</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Kanji</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Vocabulary</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Help</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-600" />
            <User className="text-gray-600" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Today's Lessons</h2>
            <p className="mb-4">We cooked up these lessons just for you.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Start Lessons
              </button>
              <button className="bg-white text-blue-500 px-4 py-2 rounded border border-blue-500 hover:bg-blue-50">
                Advanced
              </button>
            </div>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <p className="mb-4">Review these items to level them up!</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
              Start Reviews
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Mistakes</h2>
          <p>At this moment, emptiness prevails. When you do your Reviews, all of your mistakes will appear here, for a single day, in this space of reflection.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Extra Study</h2>
          <p className="mb-4">Extra Study lets you practice your radicals, kanji, and vocabulary outside of your regular Reviews. Practice done here won't count toward regular Reviews, but will count toward making your memory stronger!</p>
          <p className="font-semibold">33 Recent Lessons</p>
        </div>
      </main>
    </div>
  )
}