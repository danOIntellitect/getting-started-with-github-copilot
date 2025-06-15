<div className="activity-card">
  {/* ...existing activity info... */}
  <div className="participants-section" style={{
    marginTop: '1.5em',
    padding: '1em',
    background: '#f9f9fb',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
  }}>
    <h4 style={{ margin: '0 0 0.5em 0', color: '#4a4a4a', fontWeight: 600 }}>
      Participants
    </h4>
    <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      {participants && participants.length > 0 ? (
        participants.map((p, idx) => (
          <li key={idx} style={{ marginBottom: '0.3em', color: '#333' }}>
            {/* Optionally add avatar: <img src={p.avatarUrl} ... /> */}
            {p.name}
          </li>
        ))
      ) : (
        <li style={{ color: '#aaa' }}>No participants yet.</li>
      )}
    </ul>
  </div>
  {/* ...existing code... */}
</div>