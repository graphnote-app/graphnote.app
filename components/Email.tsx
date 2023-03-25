import React from 'react'
import styles from '../styles/Email.module.css'

export const Email = () => {
  const [enabled, setEnabled] = React.useState(false)

  const onEmailChange = (e: any) => {
    const empty = (e.target.value == "")
    setEnabled(!empty)
  }

  return (
    <div className={styles.container}>
      <form action="http://localhost:3000" method="post">
        <input 
          className={styles.emailText} 
          type="email" 
          placeholder="graphnote.io@gmail.com"
          name="email"
          onChange={onEmailChange}
        >
        </input>
        <input
          className={styles.formSubmit}
          type="submit"
          disabled={!enabled}
        >  
        </input>
      </form>
    </div>
  )
}
