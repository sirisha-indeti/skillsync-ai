import { useState } from 'react'

function AI({ onGenerateInsights, onGenerateTaskSummary, aiHistory }) {
  const [insightsPrompt, setInsightsPrompt] = useState('')
  const [summaryPrompt, setSummaryPrompt] = useState('')

  const handleInsights = (e) => {
    e.preventDefault()
    onGenerateInsights(insightsPrompt)
    setInsightsPrompt('')
  }

  const handleSummary = (e) => {
    e.preventDefault()
    onGenerateTaskSummary(summaryPrompt)
    setSummaryPrompt('')
  }

  return (
    <div className="page-card">
      <h2>AI Workspace</h2>
      <p>Generate insights and summaries with intelligent assistance.</p>

      <div className="ai-grid">
        <section className="ai-box">
          <h3>Generate Insights</h3>
          <form onSubmit={handleInsights}>
            <textarea
              rows="3"
              value={insightsPrompt}
              onChange={(e) => setInsightsPrompt(e.target.value)}
              placeholder="Describe a project or goal"
            />
            <button type="submit">Create insights</button>
          </form>
        </section>

        <section className="ai-box">
          <h3>Summarize Tasks</h3>
          <form onSubmit={handleSummary}>
            <textarea
              rows="3"
              value={summaryPrompt}
              onChange={(e) => setSummaryPrompt(e.target.value)}
              placeholder="Enter task details or goals"
            />
            <button type="submit">Generate summary</button>
          </form>
        </section>
      </div>

      <div className="ai-history">
        <h3>AI History</h3>
        {aiHistory.length > 0 ? (
          <ul>
            {aiHistory.map((item) => (
              <li key={item.id}>
                <strong>{item.type}</strong>
                <p>{item.result}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No AI responses yet. Start by sending a prompt.</p>
        )}
      </div>
    </div>
  )
}

export default AI
