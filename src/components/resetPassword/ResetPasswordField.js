import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="row">
      <div className="row" style={{ marginBottom: '.5rem' }}>
        <label style={{ color: 'white', fontSize: '1.15rem' }}>{label}</label>
      </div>
      <div className="row" style={{ marginBottom: '.5rem' }}>
        <input {...input} style={{ marginBottom: .5, background: 'white', borderRadius: '.5rem', paddingLeft: '.75rem', width: '100%', boxSizing: 'border-box' }}/>
      </div>
      <div className="row" style={{ marginBottom: '.5rem' }}>
        <div className="red-text" style={{ marginBottom: -1, marginTop: 0 }}>
          {touched && error}
        </div>
      </div>
    </div>
  )
}
