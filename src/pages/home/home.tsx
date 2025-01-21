import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import Posts from '../../components/posts/posts';

import c from './home.module.scss';

function Home() {
  return (
    <PageSkeleton>
      <div className={c.wrapper}> 
        <Posts />
      </div>
    </PageSkeleton>
  )
};

export default Home;
