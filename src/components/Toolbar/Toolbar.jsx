

const Toolbar = ({ filters, selected, onSelectFilter }) => {

  return (
    <div className="toolbar">
      {filters.map((filter, index) => (
        <button className={filter === selected ? "button selected" : "button"} type="button" onClick={() => onSelectFilter(filter)} key={index}>{filter}</button>
      ))}
    </div>
  )
}

export default Toolbar
