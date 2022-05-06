import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="hover: transation-all group flex cursor-pointer items-center space-x-2 rounded-full px-4 py-3 duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden group-hover:text-twitter md:inline-flex">{title} </p>
    </div>
  )
}

export default SidebarRow
