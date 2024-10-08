type NavRefsProps = {
    value: string
}

export const NavRefs = ({value} : NavRefsProps) => {
  return (
    <div className="nav-link">
        <a href={value}>{value}</a>
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" >
  <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"  />
</svg>
    </div>
  )
}