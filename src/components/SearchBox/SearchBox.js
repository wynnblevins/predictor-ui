export const SearchBox = (props) => {
  return(
    <input type="text" onChange={props.onSearchChange()}></input>
  )
}