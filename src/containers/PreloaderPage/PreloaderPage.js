import Preloader from "../../components/Preloader/Preloader";

export default function PreloaderPage() {
  return(
    <div>
      <Preloader className={'determinate'} width={'40%'} />
      <Preloader className={'indeterminate'} />
      <Preloader className={'circle'} />
    </div>
  )
}