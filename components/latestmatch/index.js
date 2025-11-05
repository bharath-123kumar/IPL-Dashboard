import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />

      <p>{firstInnings}</p>
      <p>{secondInnings}</p>
      <p>{manOfTheMatch}</p>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
