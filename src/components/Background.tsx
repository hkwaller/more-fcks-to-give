import { SVGProps } from 'react'

const Background = (props: SVGProps<SVGSVGElement>) => (
  <svg width={852} height={485} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={260.5} cy={417.5} r={67.5} fill="#000" />
    <circle cx={783.5} cy={172.5} r={67.5} fill="#FCF164" />
    <path
      fill="#70E287"
      d="m627.011 272 224.397 21.454L837.397 440 613 418.546zM127 233.179 270.83 165l45.422 95.822-143.83 68.179z"
    />
    <ellipse cx={290.5} cy={66.5} rx={73.5} ry={66.5} fill="#EC6380" />
    <path fill="#FCF164" d="m8.043 88.233 103.528 9.898-7.614 79.637L.429 167.87z" />
  </svg>
)

export default Background
