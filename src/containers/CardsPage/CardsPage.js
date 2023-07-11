import Card from "../../components/Card/Card";

export default function CardsPage() {
  return(
    <>
      <Card className="darkslategray white-text"/>
      <Card className="darkslategray white-text menu"/>
      <Card className="darkslategray white-text with-body">
        <div>fff</div>
        <div>fff</div>
        <div>fff</div>
      </Card>
      <Card className="darkslategray white-text" image="./images/card-bg.jpg"/>
      <Card className="darkslategray white-text" image="https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg"/>
    </>
  )
}