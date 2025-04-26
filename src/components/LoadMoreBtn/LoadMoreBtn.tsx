import s from "./LoadMoreBtn.module.css"

type Props = {
  loadMore: ()=> void
}

const LoadMoreBtn = ({loadMore}: Props) => {
  return (
    <button onClick={loadMore} className={s.loadMoreBtn}>Load More</button>
  )
}

export default LoadMoreBtn