import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  MODULE_URL
} from "../lib/utils/constants";

export function NavBar() {
  return (
    <nav className="navbar py-4 px-4 bg-base-100">
      <div className="flex-1 flex items-center gap-4">
        <a href="http://home.scaffold.rootmud.xyz" target="_blank" rel="noreferrer">
          <Image src="/logo.png" width={64} height={64} alt="logo" />
        </a>
        <ul className="menu menu-horizontal flex items-center gap-2">
          
          {/* <NavItem href="/example_ui" title="UI" /> | */}
          <NavItem href="/" title="Home" className="font-sans font-semibold text-base" /> |
          {/* <NavItem href="/all_tasks" title="All Tasks" className="font-sans font-semibold text-base" /> |  */}
          <li className="font-sans font-semibold text-base flex gap-2">
            <a href="https://sui.ai-saas.rootmud.xyz/tasks" target="_blank" rel="noreferrer">All Tasks</a> |
            <a href="https://youtu.be/koghklmoDso" target="_blank" rel="noreferrer">🎥 Video</a> |
            <a href="https://github.com/NonceGeek/tai-shang-micro-ai-saas" target="_blank" rel="noreferrer">Source Code</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
