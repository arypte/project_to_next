import Link from "next/link";
import { FC, ReactNode } from "react";

interface SideMenuProps {
  children: ReactNode;
}

// ReactNode  타입은 jsx 내에서 사용할 수 있는 모든 요소의 타입
// 즉 string, null, undefined 등을 포함하는 가장 넓은 범위를 갖는 타입입니다.

const SideMenu: FC<SideMenuProps> = ({ children }) => {
  // function components  
  return (
    <div className="bg-red-100 min-h-screen flex">
    {/* shrink-0 옵션 줘야 w-full로 인해 줄어드는 것 막을 수 있음 */}
    <nav className="bg-yellow-100 w-60 shrink-0 flex flex-col py-8 pl-4">
      <div>프로젝트 다덴부</div>
      <div className="bg-orange-100 grow"> 
      {/* grow : 남는 공간에 맞춤 */}
        <Link href="/">
          <button>Main페이지</button>
        </Link>
      </div>
      <div>Created by dh</div>
      
    </nav>
    <div className="flex flex-col w-full">{children}</div>
  </div>
  );
};

export default SideMenu;








