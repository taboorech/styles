import Collection from "../../components/Collection/Collection";

export default function CollectionsPage() {
  return (
    <div>
      <Collection className="col s6 offset-s3 with-link">
        <div className={"collection-item"}>FFF</div>
        <div className={"collection-item"}>FFF</div>
        <div className={"collection-item"}>FFF
          <a href="#!">{String.fromCharCode(8594)}</a>
        </div>
        <a href="#!" className="collection-item">FFF</a>
      </Collection>
    </div>
  )
}