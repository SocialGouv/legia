import "./styles.css"

export default function Disclaimer() {
  return (
    <div className="disclaimer">
      <p className="font-semibold text-lg">
        ⚠️ Attention ! Cette application est un test !
      </p>
      <p>
        Sa version actuelle est une beta et ne doit pas être considérée comme
        une application à usage professionnel ou personnel.
      </p>
      <p>
        Les données traitées par cette application sont susceptibles d&apos;être
        agrégées et utilisées par les auteurs de l&apos;application ainsi que
        par des tiers.
      </p>
    </div>
  )
}
