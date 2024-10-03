interface Props {
  heading: string;
}

function Assignment({ heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        <li className="list-group-item">
          {" "}
          <a
            href="https://wonderful-glacier-024279710.4.azurestaticapps.net"
            target="_blank"
          >
            {" "}
            Dice Roller
          </a>
        </li>
        <li className="list-group-item">
          {" "}
          <a
            href="https://wonderful-glacier-024279710.4.azurestaticapps.net"
            target="_blank"
          >
            {" "}
            Dice Roller Plus *NOT YET MADE*
          </a>
        </li>
        <li className="list-group-item">
          {" "}
          <a
            href="https://agreeable-dune-054006010.5.azurestaticapps.net/"
            target="_blank"
          >
            {" "}
            ECAMs Billboard
          </a>
        </li>
        <li className="list-group-item">
          {" "}
          <a
            href="https://icy-sand-0e1a9af10.4.azurestaticapps.net/"
            target="_blank"
          >
            {" "}
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}

export default Assignment;
