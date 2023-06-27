import "./styles.css"
import packageJson from "../../../package.json"

const Footer = () => {
  // const version = process.env.APP_VERSION || "0.0.0"
  // const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "dev"

  return (
    <footer>
      <div>SocialGouv © 2023</div>

      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SocialGouv/legia/"
        >
          version {packageJson.version}
        </a>
      </div>
    </footer>
  )
}

export default Footer
