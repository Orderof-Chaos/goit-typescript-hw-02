import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
      <p className={s.errorMessage}>
          We're sorry! an error occurred
      </p>
  )
}

export default ErrorMessage