import './Collection.scss';

export default function Collection(props) {
  return(
    <div className={"Collection ".concat(props.className)}>
      {props.children}
    </div>
  )
}