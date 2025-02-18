import ClipLoader from "react-spinners/ClipLoader";
const Loader = ({loading}) => {
  return (
    <ClipLoader
        color='#FF00FF'
        loading={loading}
        size={150}
      />
      
  )
}

export default Loader