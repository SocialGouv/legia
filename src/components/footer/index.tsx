import "./styles.css"

const Footer = () => {
  const version = process.env.APP_VERSION || "0.0.0"
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "dev"

  return (
    <footer>
      <div>SocialGouv © 2023</div>

      <div>
        version {version} (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/SocialGouv/legia/tree/${sha}`}
        >
          {sha.substring(0, 7)}
        </a>
        )
      </div>
    </footer>
  )
}

export default Footer
