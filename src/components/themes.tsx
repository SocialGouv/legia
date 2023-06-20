import Link from "next/link"

const Themes = () => (
  <ul className="themes">
    <li>
      <div className="tile insurance">
        <div className="text">
          <h2>Mutuelles</h2>
          <div>Faites des calculs de ouf sur votre retraite !</div>
        </div>
      </div>
    </li>
    <li>
      <div className="tile train">
        <div className="text">
          <h2>Transports</h2>
          <div>Faites des calculs de ouf sur votre retraite !</div>
        </div>
      </div>
    </li>
    <li>
      <div className="tile court">
        <div className="text">
          <h2>Prud&apos;Hommes</h2>
          <div>Faites des calculs de ouf sur votre retraite !</div>
        </div>
      </div>
    </li>
    <li>
      <Link href="/">
        <div className="tile retirement">
          <div className="text">
            <h2>Retraites</h2>
            <div>Faites des calculs de ouf sur votre retraite !</div>
          </div>
        </div>
      </Link>
    </li>
    <li>
      <div className="tile education">
        <div className="text">
          <h2>Formations</h2>
          <div>Faites des calculs de ouf sur votre retraite !</div>
        </div>
      </div>
    </li>
  </ul>
)

export default Themes
