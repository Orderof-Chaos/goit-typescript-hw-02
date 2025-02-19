import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({loadMore}) => {
  return (
    <button onClick={loadMore} className={s.loadMoreBtn}>Load More</button>
  )
}

export default LoadMoreBtn