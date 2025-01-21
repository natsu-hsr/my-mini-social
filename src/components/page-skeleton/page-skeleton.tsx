import React, {ReactNode} from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

import c from './page-skeleton.module.scss';

interface PageSkeletonProps {
  children: ReactNode;
}

function PageSkeleton({children}: PageSkeletonProps) {
  return (
    <>
      <Sidebar />
      <div className={c['wrapper']}>
        <Header />
        <div className={c['container']}>
          {children}
        </div>
      </div>
    </>
  )
}

export default PageSkeleton;