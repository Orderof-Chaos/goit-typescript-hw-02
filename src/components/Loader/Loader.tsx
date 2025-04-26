import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  loading: boolean
}

const Loader = ({loading}: Props) => {
  return (
    <ClipLoader
        color='#FF00FF'
        loading={loading}
        size={150}
      />
      
  )
}

export default Loader