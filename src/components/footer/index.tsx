import "./styles.css"
import packageJson from "../../../package.json"

const Footer = () => {
  return (
    <footer>
      <div>SocialGouv © 2023</div>

      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SocialGouv/legia/"
        >
          version {packageJson.version} beta
        </a>
      </div>
    </footer>
  )
}

export default Footer
