
export default  function SquareWrapper({ children }: {
    children: JSX.Element[];
}): JSX.Element {
    
    return (
      <div className='square-wrapper'>
          {children}
      </div>
    )
}
