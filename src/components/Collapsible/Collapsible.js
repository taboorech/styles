import './Collapsible.scss';

export default function Collapsible(props) {
  return (
    <div className={'Collapsible col s10 offset-s1 '.concat(props.className)}>
      <div className={'title-block'} onClick = { props.onClick }>
        { props.title }
        <div className='secondary-content'>
          
        </div>
      </div>
      <div className='collapsible-body'>
        <div className='collapsible-body-content'>
          <div className='description-block'>
            { props.description }
          </div>
          {/* <div className='attachments-block'>
            
          </div>
          <div className='button-block'>
            
          </div> */}
        </div>
      </div>
    </div>
  )
}