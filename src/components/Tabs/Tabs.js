import './Tabs.scss';

export default function Tabs(props) {
  
  const createTabsPages = () => {
    return props.children.map((children, index) => (
      <a href={`#a${index + 1}`} key={`tabs-pages-${index}`} className='tabsNavItem'>FF</a>
    ));
  }

  return(
    <div className="Tabs">
      <div className="tabsNav">
        {createTabsPages()}
        <div className='indicator'></div>
      </div>
      {props.children}
    </div>
  )
}