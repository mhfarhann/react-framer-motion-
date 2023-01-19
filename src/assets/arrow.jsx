

 const Arrow = (props) => {
    console.log(props)
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
       
        stroke={props.stroke}
        className="h-6 w-6 rotate-90"
        viewBox="0 0 21.73 27.515"
      >
        <g
          fill="none"
          strokeWidth="2"
          data-name="arrow up"
          transform="rotate(-90 -47.818 1810.333)"
        >
          <path
            d="M26 0L0 0"
            data-name="Linie 20"
            transform="translate(1735 1869)"
          ></path>
          <path
            d="M1751 1858.188s.316 8.58 11.313 10.843"
            data-name="Pfad 2"
          ></path>
          <path
            d="M1751 1879.844s.316-8.58 11.313-10.843"
            data-name="Pfad 3"
          ></path>
        </g>
      </svg>
    )
}
export default Arrow