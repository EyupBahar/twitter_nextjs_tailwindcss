import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="HashtagIcon" />
      <SidebarRow Icon={BellIcon} title="BellIcon" />
      <SidebarRow Icon={BookmarkIcon} title="BookmarkIcon" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={MailIcon} title="MailIcon" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
