import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import useProblemSetModel from '../models/useProblemSetModel'

const ProblemSet = () => {
  console.log('ProblemSet Component')

  const problems = useProblemSetModel()
  // const problems = [
  //   { status: 'solved', title: 'Minimum Number of Pushes to Type Word I', slug:"minimum-number-of-pushes-to-type-word-i", difficulty: 'Easy' },
  //   { status: 'unsolved', title: 'Count the Number of Houses at a Certain Distance I4', slug:"count-the-number-of-houses-at-a-certain-distance-i4", difficulty: 'Medium' },
  //   { status: 'solved', title: 'Count the Number of Houses at a Certain Distance II', slug:"count-the-number-of-houses-at-a-certain-distance-ii", difficulty: 'Hard' },
  // ];

  const getStatusIcon = (status) => {
    if (status === 'solved') {
      return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
    } else {
      return (
        <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6">DSA Questions</h1>

        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="py-2 px-4">{getStatusIcon(problem.status)}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/problems/${problem.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {problem.title}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-500'
                        : problem.difficulty === 'Medium'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                    } text-white px-2 py-1 rounded-full`}
                  >
                    {problem.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProblemSet
